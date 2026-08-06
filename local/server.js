const { createServer } = require('node:http');
const { readFile } = require('node:fs/promises');
const { resolve, join, extname } = require('node:path');
const { spawn } = require('node:child_process');

const PORT = Number(process.env.PORT || 5317);
const STATIC_ROOT = resolve(__dirname, '..', 'map');

const SHAREPOINT = {
  sharingUrl: 'https://fiocruzbr-my.sharepoint.com/:l:/g/personal/vitoria_arfre_fiocruz_br/JABMgrm-i_KBQKdBVd8GdwtRAe0hG4Ddp8okKi1jSDnMqTg?e=xk6yzd',
  siteUrl: 'https://fiocruzbr-my.sharepoint.com/personal/vitoria_arfre_fiocruz_br',
  listId: 'beb9824c-f28b-4081-a741-55df06770b51',
  cookieTtlMs: 10 * 60 * 1000
};

const SELECT_FIELDS = [
  'ID',
  'Title',
  'Estado',
  'DispName',
  'Contato',
  'Email',
  'Portaria',
  'Modified',
  'Contato_2_representante',
  'Email_2_representante',
  'Contato_3_representante',
  'Email_3_representante',
  'Representante/Title',
  'Representante/EMail',
  'OData__x0032__x00b0_Representante/Title',
  'OData__x0032__x00b0_Representante/EMail',
  'OData__x0033__x00ba_Representante/Title',
  'OData__x0033__x00ba_Representante/EMail'
];

const EXPAND_FIELDS = [
  'Representante',
  'OData__x0032__x00b0_Representante',
  'OData__x0033__x00ba_Representante'
];

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg'
};

let cookieJar = new Map();
let cookieExpiresAt = 0;

function getApiUrl() {
  const params = new URLSearchParams();
  params.set('$top', '5000');
  params.set('$select', SELECT_FIELDS.join(','));
  params.set('$expand', EXPAND_FIELDS.join(','));
  params.set('_', String(Date.now()));
  return `${SHAREPOINT.siteUrl}/_api/web/lists(guid'${SHAREPOINT.listId}')/items?${params.toString()}`;
}

function mergeCookies(headers) {
  const setCookies = typeof headers.getSetCookie === 'function'
    ? headers.getSetCookie()
    : [headers.get('set-cookie')].filter(Boolean);

  setCookies.forEach(cookie => {
    const firstPart = cookie.split(';')[0];
    const separator = firstPart.indexOf('=');
    if (separator > 0) {
      cookieJar.set(firstPart.slice(0, separator), firstPart.slice(separator + 1));
    }
  });
}

function getCookieHeader() {
  return [...cookieJar.entries()].map(([name, value]) => `${name}=${value}`).join('; ');
}

async function prepareSharePointCookies(force = false) {
  if (!force && Date.now() < cookieExpiresAt && cookieJar.size) {
    return getCookieHeader();
  }

  cookieJar = new Map();

  const first = await fetch(SHAREPOINT.sharingUrl, { redirect: 'manual' });
  mergeCookies(first.headers);

  const location = first.headers.get('location');
  if (location) {
    const second = await fetch(location, {
      redirect: 'manual',
      headers: { Cookie: getCookieHeader() }
    });
    mergeCookies(second.headers);
  }

  cookieExpiresAt = Date.now() + SHAREPOINT.cookieTtlMs;
  return getCookieHeader();
}

async function fetchSharePointItems() {
  let cookie = await prepareSharePointCookies();
  let response = await fetch(getApiUrl(), {
    headers: {
      Accept: 'application/json;odata=nometadata',
      Cookie: cookie
    }
  });

  if (response.status === 401 || response.status === 403) {
    cookie = await prepareSharePointCookies(true);
    response = await fetch(getApiUrl(), {
      headers: {
        Accept: 'application/json;odata=nometadata',
        Cookie: cookie
      }
    });
  }

  if (!response.ok) {
    throw new Error(`SharePoint respondeu ${response.status}`);
  }

  return response.json();
}

function sendJson(res, status, payload) {
  const body = JSON.stringify(payload);
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
    'Content-Length': Buffer.byteLength(body)
  });
  res.end(body);
}

async function serveStatic(req, res, pathname) {
  const normalizedPath = pathname === '/' ? '/mapa01.html' : pathname;
  const filePath = resolve(STATIC_ROOT, `.${decodeURIComponent(normalizedPath)}`);

  if (!filePath.startsWith(`${STATIC_ROOT}\\`) && filePath !== join(STATIC_ROOT, 'mapa01.html')) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  try {
    const content = await readFile(filePath);
    res.writeHead(200, {
      'Content-Type': MIME_TYPES[extname(filePath).toLowerCase()] || 'application/octet-stream',
      'Cache-Control': 'no-store'
    });
    res.end(content);
  } catch (error) {
    res.writeHead(404);
    res.end('Not found');
  }
}

const server = createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (url.pathname === '/api/sharepoint-items') {
    try {
      const payload = await fetchSharePointItems();
      sendJson(res, 200, payload);
    } catch (error) {
      sendJson(res, 502, { error: error.message });
    }
    return;
  }

  await serveStatic(req, res, url.pathname);
});

server.listen(PORT, () => {
  const url = `http://localhost:${PORT}/`;
  console.log(`Mapa sincronizado: ${url}`);

  if (process.platform === 'win32' && !process.env.NO_OPEN) {
    const child = spawn('cmd', ['/c', 'start', '', url], {
      detached: true,
      stdio: 'ignore'
    });
    child.unref();
  }
});
