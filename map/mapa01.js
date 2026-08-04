// ===== DADOS =====
const STATE_DATA_RAW = {
  "AC": {
    "name": "Acre",
    "uf": "AC",
    "capital": "Rio Branco",
    "region": "Norte",
    "offices": []
  },
  "AL": {
    "name": "Alagoas",
    "uf": "AL",
    "capital": "Maceió",
    "region": "Nordeste",
    "offices": []
  },
  "AP": {
    "name": "Amapá",
    "uf": "AP",
    "capital": "Macapá",
    "region": "Norte",
    "offices": []
  },
  "AM": {
    "name": "Amazonas",
    "uf": "AM",
    "capital": "Manaus",
    "region": "Norte",
    "offices": [
      {
        "name": "Instituto Leônidas & Maria Deane - ILMD",
        "address": "Manaus",
        "representatives": [
          {
            "role": "1º Representante",
            "name": "Aldemir Lima Maquiné",
            "email": "aldemir.maquine@fiocruz.br",
            "phone": "(92) 3621-2358"
          },
          {
            "role": "2º Representante",
            "name": "Fabio Rocha Cabral",
            "email": "fabio.cabral@fiocruz.br",
            "phone": "(92) 3621-2394"
          }
        ],
        "ordinanceUrl": "https://fiocruzbr.sharepoint.com/:b:/s/ApoioRededeProjetos-CO_CI/IQCILpTTdWzIRKLeSFT4kFvwAef6gKLBi1I-KwescT6556M?e=76t3fj"
      }
    ]
  },
  "BA": {
    "name": "Bahia",
    "uf": "BA",
    "capital": "Salvador",
    "region": "Nordeste",
    "offices": [
      {
        "name": "Instituto Gonçalo Moniz - IGM",
        "address": "Salvador",
        "representatives": [
          {
            "role": "1º Representante",
            "name": "Andrezza Kariny Miranda de Souza",
            "email": "andrezza.souza@fiocruz.br",
            "phone": ""
          }
        ],
        "ordinanceUrl": "https://fiocruzbr.sharepoint.com/:b:/s/ApoioRededeProjetos-CO_CI/IQAFTMZAfbRgRKu_ZymZRp6HATacio3vMqglstXf2OioeL0?e=Wo4GSc"
      }
    ]
  },
  "CE": {
    "name": "Ceará",
    "uf": "CE",
    "capital": "Fortaleza",
    "region": "Nordeste",
    "offices": []
  },
  "DF": {
    "name": "Distrito Federal",
    "uf": "DF",
    "capital": "Brasília",
    "region": "Centro-Oeste",
    "offices": [
      {
        "name": "Gerência Regional de Brasília- GEREB",
        "address": "Brasilia",
        "representatives": [
          {
            "role": "1º Representante",
            "name": "Rodrigo Andrada Nabuco de Araujo",
            "email": "rodrigo.araujo@fiocruz.br",
            "phone": ""
          },
          {
            "role": "2º Representante",
            "name": "Jose Antonio Silvestre Fernandes Neto",
            "email": "antonio.silvestre@fiocruz.br",
            "phone": "(61) 3329-4618"
          }
        ],
        "ordinanceUrl": "https://fiocruzbr.sharepoint.com/:b:/s/ApoioRededeProjetos-CO_CI/IQBJALqTWm2aR7PmEGTc7xCBAVW6yCxox0fFPfnfRuzjjrU?e=AZbfaE"
      }
    ]
  },
  "ES": {
    "name": "Espírito Santo",
    "uf": "ES",
    "capital": "Vitória",
    "region": "Sudeste",
    "offices": []
  },
  "GO": {
    "name": "Goiás",
    "uf": "GO",
    "capital": "Goiânia",
    "region": "Centro-Oeste",
    "offices": []
  },
  "MA": {
    "name": "Maranhão",
    "uf": "MA",
    "capital": "São Luís",
    "region": "Nordeste",
    "offices": []
  },
  "MT": {
    "name": "Mato Grosso",
    "uf": "MT",
    "capital": "Cuiabá",
    "region": "Centro-Oeste",
    "offices": []
  },
  "MS": {
    "name": "Mato Grosso do Sul",
    "uf": "MS",
    "capital": "Campo Grande",
    "region": "Centro-Oeste",
    "offices": [
      {
        "name": "Fiocruz Mato Grosso do Sul",
        "address": "Mato Grosso do Sul",
        "representatives": [
          {
            "role": "1º Representante",
            "name": "Flavia Maria Lins Mendes",
            "email": "flavia.mendes@fiocruz.br",
            "phone": ""
          }
        ],
        "ordinanceUrl": "https://fiocruzbr.sharepoint.com/:b:/s/ApoioRededeProjetos-CO_CI/IQBiMNqNPvOuSontIfW6BydQAYpWmaMnJPW3kVk_w4toppk?e=hNrUos"
      }
    ]
  },
  "MG": {
    "name": "Minas Gerais",
    "uf": "MG",
    "capital": "Belo Horizonte",
    "region": "Sudeste",
    "offices": [
      {
        "name": "Instituto René Rachou - IRR",
        "address": "Belo Horizonte",
        "representatives": [
          {
            "role": "1º Representante",
            "name": "Cristiane Pinheiro Gomes",
            "email": "cristiane.gomes@fiocruz.br",
            "phone": ""
          },
          {
            "role": "2º Representante",
            "name": "Cristina Lima Carrara Carvalho",
            "email": "cristina.carrara@fiocruz.br",
            "phone": "(31) 3349-7804"
          }
        ],
        "ordinanceUrl": "https://fiocruzbr.sharepoint.com/:b:/s/ApoioRededeProjetos-CO_CI/IQAi143XiJCyRJOlZE1oBaBxARPNvUxm4oHBhtZxbQFPimw?e=jKO6vq"
      }
    ]
  },
  "PA": {
    "name": "Pará",
    "uf": "PA",
    "capital": "Belém",
    "region": "Norte",
    "offices": []
  },
  "PB": {
    "name": "Paraíba",
    "uf": "PB",
    "capital": "João Pessoa",
    "region": "Nordeste",
    "offices": []
  },
  "PR": {
    "name": "Paraná",
    "uf": "PR",
    "capital": "Curitiba",
    "region": "Sul",
    "offices": [
      {
        "name": "Instituto Carlos Chagas - ICC",
        "address": "Curitiba",
        "representatives": [
          {
            "role": "1º Representante",
            "name": "Alexandra Magnuskei",
            "email": "alexandra.magnuskei@fiocruz.br",
            "phone": "(41) 3316 3239"
          },
          {
            "role": "2º Representante",
            "name": "Rodrigo Dias Silva",
            "email": "silva.rodrigo@fiocruz.br",
            "phone": ""
          }
        ],
        "ordinanceUrl": "https://fiocruzbr.sharepoint.com/:b:/s/ApoioRededeProjetos-CO_CI/IQAvXdlqOU0nR59UIfTgfQ0eAeysQYh3vvI3YRKLQVqkMK4?e=IDvbH0"
      }
    ]
  },
  "PE": {
    "name": "Pernambuco",
    "uf": "PE",
    "capital": "Recife",
    "region": "Nordeste",
    "offices": [
      {
        "name": "Instituto Aggeu Magalhães - IAM",
        "address": "Recife",
        "representatives": [
          {
            "role": "1º Representante",
            "name": "Clarissa Pimentel Bandeira de Melo",
            "email": "clarissa.melo@fiocruz.br",
            "phone": ""
          },
          {
            "role": "2º Representante",
            "name": "Ana Claudia de Andrade Souza Leao",
            "email": "ana.leao@fiocruz.br",
            "phone": "(81) 2123-7860"
          }
        ],
        "ordinanceUrl": "https://fiocruzbr.sharepoint.com/:b:/s/ApoioRededeProjetos-CO_CI/IQArv8WIC0kvQqg9IMvA1ZdkAXMPNPfuVgx_Zw6nSLWo2yE?e=DTsoHF"
      }
    ]
  },
  "PI": {
    "name": "Piauí",
    "uf": "PI",
    "capital": "Teresina",
    "region": "Nordeste",
    "offices": []
  },
  "RJ": {
    "name": "Rio de Janeiro",
    "uf": "RJ",
    "capital": "Rio de Janeiro",
    "region": "Sudeste",
    "offices": [
      {
        "name": "Instituto Nacional de Controle de Qualidade em Saúde - INCQS",
        "address": "Rio de Janeiro",
        "representatives": [
          {
            "role": "1º Representante",
            "name": "Fernanda Nicodemos Pinho Aparicio",
            "email": "fernanda.nicodemos@fiocruz.br",
            "phone": "(21) 3865-5255"
          },
          {
            "role": "2º Representante",
            "name": "Alessandra Keiko de Paula Kanda",
            "email": "alessandra.kanda@fiocruz.br",
            "phone": "(21) 3865-5125"
          }
        ],
        "ordinanceUrl": "https://fiocruzbr.sharepoint.com/:b:/s/ApoioRededeProjetos-CO_CI/IQBeVcwc5cnJT5fxgspEXelFAXe2JHC4WNHrvQS7v5pl5lk?e=H7trFh"
      },
      {
        "name": "Instituto de Tecnologia em Fármacos - Farmanguinhos",
        "address": "Rio de Janeiro",
        "representatives": [
          {
            "role": "1º Representante",
            "name": "Maria Amalia do N. Monteiro",
            "email": "maria.amalia@fiocruz.br",
            "phone": "(21) 99645-4945"
          },
          {
            "role": "2º Representante",
            "name": "MILENE MENEZES DO AMARAL",
            "email": "milene.menezes@fiocruz.br",
            "phone": ""
          },
          {
            "role": "3º Representante",
            "name": "ROSECLEIDE VITORINO DE ALMEIDA",
            "email": "rosecleide.almeida@fiocruz.br",
            "phone": "(21) 3348-5312"
          }
        ],
        "ordinanceUrl": "https://fiocruzbr.sharepoint.com/:b:/s/ApoioRededeProjetos-CO_CI/IQD_8_MaI5K0RpaEu7NQut4RAershLC2C3n8sUc_b1h6FX0?e=SKVn06"
      },
      {
        "name": "Instituto Oswaldo Cruz - IOC",
        "address": "Rio de Janeiro",
        "representatives": [
          {
            "role": "1º Representante",
            "name": "Aline Christine de Morais Santos",
            "email": "aline.morais@fiocruz.br",
            "phone": "(21) 3885-1755"
          },
          {
            "role": "2º Representante",
            "name": "LORENA TOFFANO FERREIRA",
            "email": "lorena.toffano@fiocruz.br",
            "phone": ""
          }
        ]
      },
      {
        "name": "Coordenação-Geral de Planejamento Estratégico da Fundação Oswaldo Cruz - COGEPLAN",
        "address": "Rio de Janeiro",
        "representatives": [
          {
            "role": "1º Representante",
            "name": "Luciana Goulart de Carvalho",
            "email": "luciana.goulart@fiocruz.br",
            "phone": "(21) 3882-9160"
          },
          {
            "role": "2º Representante",
            "name": "Adriana Nascimento de Oliveira",
            "email": "adriana.nascimento@fiocruz.br",
            "phone": ""
          }
        ],
        "ordinanceUrl": "https://fiocruzbr.sharepoint.com/:b:/s/ApoioRededeProjetos-CO_CI/IQCxkJ5L-FOBRJs0CnhDfXWXAalcIxpvcz7aogRWLPl7TV0?e=hvdFM0"
      },
      {
        "name": "Escola Politécnica de Saúde Joaquim Venâncio - EPSJV",
        "address": "Rio de Janeiro",
        "representatives": [
          {
            "role": "1º Representante",
            "name": "Adriana da Silva Ricão",
            "email": "adriana.ricao@fiocruz.br",
            "phone": "(21) 3865-9704"
          }
        ],
        "ordinanceUrl": "https://fiocruzbr.sharepoint.com/:b:/s/ApoioRededeProjetos-CO_CI/IQC12VpEFR4tS6kbEDqpHLWEAa7OwwfCRytIA0OGBcqIARU?e=oF1vkm"
      },
      {
        "name": "Casa de Oswaldo Cruz - COC",
        "address": "Rio de Janeiro",
        "representatives": [
          {
            "role": "1º Representante",
            "name": "Nezi Heverton Campos de Oliveira",
            "email": "heverton.oliveira@fiocruz.br",
            "phone": "(21) 3865-2260"
          },
          {
            "role": "2º Representante",
            "name": "Alessandra dos Santos Pinho",
            "email": "alessandra.pinho@fiocruz.br",
            "phone": "(21) 3865-2233"
          }
        ],
        "ordinanceUrl": "https://fiocruzbr.sharepoint.com/:b:/s/ApoioRededeProjetos-CO_CI/IQCsX4vvauAxRr0y6y8fwQWNAZJZ3uvMR6oqHW-REm-6ajQ?e=WQCQaR"
      },
      {
        "name": "Bio-Manguinhos",
        "address": "Rio de Janeiro",
        "representatives": [
          {
            "role": "1º Representante",
            "name": "Vinícius Bezerra de Melo",
            "email": "vinicius.melo@bio.fiocruz.br",
            "phone": ""
          },
          {
            "role": "2º Representante",
            "name": "Bruno Abreu Santos",
            "email": "bruno.santos@bio.fiocruz.br",
            "phone": ""
          },
          {
            "role": "3º Representante",
            "name": "Rômulo Oliveira Botelho",
            "email": "Romulo.oliveira@bio.fiocruz.br",
            "phone": ""
          }
        ],
        "ordinanceUrl": "https://fiocruzbr.sharepoint.com/:b:/s/ApoioRededeProjetos-CO_CI/IQDnrCUaUVtNT7u7GZqnNOnxAYxFHh2cOQ9DQOjHEuYanBk?e=p8l0uo"
      },
      {
        "name": "Escola Nacional de Saúde Pública Sergio Arouca - ENSP",
        "address": "Rio de Janeiro",
        "representatives": [
          {
            "role": "1º Representante",
            "name": "MARCOS IVAN NEVES DE CARVALHO",
            "email": "marcos.carvalho@fiocruz.br",
            "phone": "(21) 2598-2860"
          },
          {
            "role": "2º Representante",
            "name": "Renata Luisa Sette Collazos",
            "email": "renata.collazos@fiocruz.br",
            "phone": "(21) 2598-2541"
          },
          {
            "role": "3º Representante",
            "name": "EDUARDO SOARES DE SOUZA",
            "email": "eduardo.soares@fiocruz.br",
            "phone": ""
          }
        ]
      },
      {
        "name": "Instituto de Comunicação e Informação Científica e Tecnológica em Saúde - ICICT",
        "address": "Rio de Janeiro",
        "representatives": [
          {
            "role": "1º Representante",
            "name": "Erisvan Vieira Da Silva",
            "email": "erisvan.silva@fiocruz.br",
            "phone": ""
          },
          {
            "role": "2º Representante",
            "name": "Ingrid Jann",
            "email": "ingrid.jann@fiocruz.br",
            "phone": "(21) 3865-3219"
          }
        ],
        "ordinanceUrl": "https://fiocruzbr.sharepoint.com/:b:/s/ApoioRededeProjetos-CO_CI/IQClAv4Ge4nYTbVnfCQGxp7eAaPZUr39GwrgtJxDhWWox-g?e=1bqKfy"
      },
      {
        "name": "EPF",
        "address": "Rio de Janeiro",
        "representatives": [
          {
            "role": "1º Representante",
            "name": "Luciana Goulart de Carvalho",
            "email": "luciana.goulart@fiocruz.br",
            "phone": "(21) 3882-9160"
          },
          {
            "role": "2º Representante",
            "name": "Adriana Nascimento de Oliveira",
            "email": "adriana.nascimento@fiocruz.br",
            "phone": ""
          }
        ]
      }
    ]
  },
  "RN": {
    "name": "Rio Grande do Norte",
    "uf": "RN",
    "capital": "Natal",
    "region": "Nordeste",
    "offices": []
  },
  "RS": {
    "name": "Rio Grande do Sul",
    "uf": "RS",
    "capital": "Porto Alegre",
    "region": "Sul",
    "offices": []
  },
  "RO": {
    "name": "Rondônia",
    "uf": "RO",
    "capital": "Porto Velho",
    "region": "Norte",
    "offices": [
      {
        "name": "Fiocruz Rondônia",
        "address": "Rondônia",
        "representatives": [
          {
            "role": "1º Representante",
            "name": "Najla Benevides Matos",
            "email": "najla.matos@fiocruz.br",
            "phone": "(69) 3219-6012"
          },
          {
            "role": "2º Representante",
            "name": "Jansen Fernandes Medeiros",
            "email": "jansen.medeiro@fiocruz.br",
            "phone": "(69) 3219-6024"
          }
        ],
        "ordinanceUrl": "https://fiocruzbr.sharepoint.com/:b:/s/ApoioRededeProjetos-CO_CI/IQD3XKuikMXOT4SHvnGhXes4AYdXDp5C8eQrwH-Pyg0bzGI?e=8aRbNI"
      }
    ]
  },
  "RR": {
    "name": "Roraima",
    "uf": "RR",
    "capital": "Boa Vista",
    "region": "Norte",
    "offices": []
  },
  "SC": {
    "name": "Santa Catarina",
    "uf": "SC",
    "capital": "Florianópolis",
    "region": "Sul",
    "offices": []
  },
  "SP": {
    "name": "São Paulo",
    "uf": "SP",
    "capital": "São Paulo",
    "region": "Sudeste",
    "offices": []
  },
  "SE": {
    "name": "Sergipe",
    "uf": "SE",
    "capital": "Aracaju",
    "region": "Nordeste",
    "offices": []
  },
  "TO": {
    "name": "Tocantins",
    "uf": "TO",
    "capital": "Palmas",
    "region": "Norte",
    "offices": []
  }
};

const PRESIDENCIA_RAW = {
  "name": "Márcio Aldrin França Cavalcante",
  "email": "marcio.cavalcante@fiocruz.br",
  "phone": "(61) 99991-0112"
};

// O SharePoint é a fonte principal; os dados acima ficam como fallback local.
const SHAREPOINT_CONFIG = {
  enabled: true,
  siteUrl: "https://fiocruzbr-my.sharepoint.com/personal/vitoria_arfre_fiocruz_br",
  listId: "beb9824c-f28b-4081-a741-55df06770b51",
  sharingUrl: "https://fiocruzbr-my.sharepoint.com/:l:/g/personal/vitoria_arfre_fiocruz_br/JABMgrm-i_KBQKdBVd8GdwtRAe0hG4Ddp8okKi1jSDnMqTg?e=xk6yzd",
  proxyPath: "/api/sharepoint-items",
  refreshMs: 30 * 1000
};

const SHAREPOINT_SELECT_FIELDS = [
  "ID",
  "Title",
  "Estado",
  "DispName",
  "Contato",
  "Email",
  "Portaria",
  "Modified",
  "Contato_2_representante",
  "Email_2_representante",
  "Contato_3_representante",
  "Email_3_representante",
  "Representante/Title",
  "Representante/EMail",
  "OData__x0032__x00b0_Representante/Title",
  "OData__x0032__x00b0_Representante/EMail",
  "OData__x0033__x00ba_Representante/Title",
  "OData__x0033__x00ba_Representante/EMail"
];

const SHAREPOINT_EXPAND_FIELDS = [
  "Representante",
  "OData__x0032__x00b0_Representante",
  "OData__x0033__x00ba_Representante"
];

let STATE_DATA = cloneData(STATE_DATA_RAW);
let PRESIDENCIA = cloneData(PRESIDENCIA_RAW);
let selectedUF = "RJ";

// ===== CORES POR REGIÃO =====
const REGION_COLORS = {
  "Norte": "#B66A3C",
  "Nordeste": "#A94F3D",
  "Centro-Oeste": "#8FA58E",
  "Sudeste": "#245B63",
  "Sul": "#E8D8BD"
};

// ===== VALIDAÇÃO DE ESCRITÓRIOS VÁLIDOS =====
function cloneData(data) {
  return JSON.parse(JSON.stringify(data));
}

function isFilled(value) {
  return String(value || '').trim() !== '';
}

function getRepresentatives(office) {
  if (!office) return [];
  if (Array.isArray(office.representatives)) {
    return office.representatives.filter(rep =>
      isFilled(rep.name) || isFilled(rep.email) || isFilled(rep.phone)
    );
  }

  return [
    office.titular && { role: 'Representante Titular', ...office.titular },
    office.suplente && { role: 'Representante Suplente', ...office.suplente }
  ].filter(rep => rep && (isFilled(rep.name) || isFilled(rep.email) || isFilled(rep.phone)));
}

function isValidOffice(office) {
  if (!office) return false;
  return isFilled(office.name) || getRepresentatives(office).length > 0;
}

function hasValidOffice(uf) {
  const info = STATE_DATA[uf];
  if (!info) return false;
  return info.offices.some(isValidOffice);
}

let activeUFs = [];

// ===== CONTAGEM TOTAL DE ESCRITÓRIOS VÁLIDOS =====
function countTotalOffices() {
  let total = 0;
  for (const uf of activeUFs) {
    const info = STATE_DATA[uf];
    total += info.offices.filter(isValidOffice).length;
  }
  return total;
}

let totalEstados = 0;
let totalEscritorios = 0;

function recalculateTotals() {
  activeUFs = Object.keys(STATE_DATA).filter(hasValidOffice);
  totalEstados = activeUFs.length;
  totalEscritorios = countTotalOffices();
}

// ===== PINTURA DO MAPA =====
function paintMap() {
  document.querySelectorAll('.state').forEach(el => {
    const uf = el.getAttribute('data-uf');
    const info = STATE_DATA[uf];
    el.classList.remove('active', 'inactive', 'selected');
    if (info) {
      const cor = REGION_COLORS[info.region] || '#E8D8BD';
      if (activeUFs.includes(uf)) {
        el.style.fill = cor;
        el.classList.add('active');
      } else {
        el.style.fill = '#E8D8BD';
        el.classList.add('inactive');
      }
    }
  });

  const target = document.getElementById(selectedUF);
  if (target && activeUFs.includes(selectedUF)) {
    target.classList.add('selected');
  }
}

// ===== CARDS DE SOMATÓRIO =====
function renderSummaryCards() {
  const placeholder = document.getElementById('summary-placeholder');
  placeholder.innerHTML = `
    <div class="summary-cards">
      <div class="summary-card">
        <div class="number">${totalEstados}</div>
        <div class="label">Presença em Estados</div>
      </div>
      <div class="summary-card">
        <div class="number">${totalEscritorios}</div>
        <div class="label">Total de escritórios</div>
      </div>
    </div>
  `;
}

// ===== ICONES =====
const ICONS = {
  pin: `<svg viewBox="0 0 24 24" fill="none" stroke="#3fb983" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  building: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="1"/><line x1="9" y1="7" x2="9" y2="7.01"/><line x1="15" y1="7" x2="15" y2="7.01"/><line x1="9" y1="12" x2="9" y2="12.01"/><line x1="15" y1="12" x2="15" y2="12.01"/><line x1="9" y1="17" x2="15" y2="17"/></svg>`,
  user: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>`,
  phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  file: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>`,
  chevron: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`
};

function escapeHtml(value) {
  return String(value || '').replace(/[&<>"']/g, char => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[char]));
}

function roleClass(index) {
  return ['titular', 'suplente', 'terceiro'][index] || 'extra';
}

function renderRepRow(type, icon, value) {
  if (!isFilled(value)) return '';
  return `<div class="rep-row ${type}">${icon}${escapeHtml(value)}</div>`;
}

function renderRepresentatives(office) {
  return getRepresentatives(office).map((rep, idx) => `
    <div class="rep-block">
      <p class="rep-role ${roleClass(idx)}">${escapeHtml(rep.role || `${idx + 1}º Representante`)}</p>
      ${renderRepRow('name', ICONS.user, rep.name)}
      ${renderRepRow('email', ICONS.mail, rep.email)}
      ${renderRepRow('phone', ICONS.phone, rep.phone)}
    </div>
  `).join('');
}

function renderOrdinanceLink(office) {
  if (!isFilled(office.ordinanceUrl)) return '';
  return `
    <a class="ordinance-link" href="${escapeHtml(office.ordinanceUrl)}" target="_blank" rel="noopener noreferrer">
      ${ICONS.file} Portaria
    </a>
  `;
}

function setSyncStatus(message, state = 'idle') {
  const header = document.querySelector('.map-header');
  if (!header) return;

  let status = document.getElementById('sync-status');
  if (!status) {
    status = document.createElement('button');
    status.id = 'sync-status';
    status.className = 'sync-status';
    status.type = 'button';
    status.title = 'Atualizar dados do SharePoint';
    status.addEventListener('click', () => syncSharePointData());
    header.appendChild(status);
  }

  status.textContent = message;
  status.dataset.state = state;
  status.disabled = state === 'loading';
}

function formatSyncTime(date) {
  return date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
}

function normalizeSharePointText(value) {
  return String(value || '')
    .replace(/Ins[\x00-\x1F]+tuto/g, 'Instituto')
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '')
    .trim();
}

function normalizeForCompare(value) {
  return normalizeSharePointText(value)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

function createEmptyStateData() {
  const data = {};
  Object.entries(STATE_DATA_RAW).forEach(([uf, info]) => {
    data[uf] = {
      name: info.name,
      uf: info.uf,
      capital: info.capital,
      region: info.region,
      offices: []
    };
  });
  return data;
}

function createRepresentative(role, person, email, phone) {
  const name = normalizeSharePointText(person && person.Title);
  const finalEmail = normalizeSharePointText(email || (person && person.EMail));
  const finalPhone = normalizeSharePointText(phone);

  if (!isFilled(name) && !isFilled(finalEmail) && !isFilled(finalPhone)) {
    return null;
  }

  return { role, name, email: finalEmail, phone: finalPhone };
}

function getSharePointApiUrl() {
  const params = new URLSearchParams();
  params.set('$top', '5000');
  params.set('$select', SHAREPOINT_SELECT_FIELDS.join(','));
  params.set('$expand', SHAREPOINT_EXPAND_FIELDS.join(','));
  params.set('_', String(Date.now()));

  return `${SHAREPOINT_CONFIG.siteUrl}/_api/web/lists(guid'${SHAREPOINT_CONFIG.listId}')/items?${params.toString()}`;
}

async function warmSharePointSharingLink() {
  if (!SHAREPOINT_CONFIG.sharingUrl) return;

  try {
    await fetch(SHAREPOINT_CONFIG.sharingUrl, {
      cache: 'no-store',
      credentials: 'include',
      mode: 'no-cors'
    });
  } catch (error) {
    console.warn('Não foi possível preparar o link de compartilhamento do SharePoint.', error);
  }
}

async function fetchSharePointItems() {
  const errors = [];

  if (!isRunningOnSharePoint()) {
    try {
      return await fetchSharePointItemsFromProxy();
    } catch (error) {
      errors.push(error.message);
    }
  }

  try {
    return await fetchSharePointItemsDirectly();
  } catch (error) {
    errors.push(error.message);
  }

  if (isRunningOnSharePoint()) {
    try {
      return await fetchSharePointItemsFromProxy();
    } catch (error) {
      errors.push(error.message);
    }
  }

  throw new Error(errors.join(' | '));
}

function isRunningOnSharePoint() {
  return window.location.hostname.endsWith('.sharepoint.com') ||
         window.location.hostname.endsWith('-my.sharepoint.com');
}

async function fetchSharePointItemsFromProxy() {
  const response = await fetch(`${SHAREPOINT_CONFIG.proxyPath}?_=${Date.now()}`, {
    cache: 'no-store',
    headers: {
      Accept: 'application/json',
      'Cache-Control': 'no-cache'
    }
  });

  if (!response.ok) {
    throw new Error(`Proxy local respondeu ${response.status}`);
  }

  const payload = await response.json();
  return payload.value || [];
}

async function fetchSharePointItemsDirectly() {
  await warmSharePointSharingLink();

  const response = await fetch(getSharePointApiUrl(), {
    cache: 'no-store',
    credentials: 'include',
    headers: {
      Accept: 'application/json;odata=nometadata',
      'Cache-Control': 'no-cache'
    }
  });

  if (!response.ok) {
    throw new Error(`SharePoint respondeu ${response.status}`);
  }

  const payload = await response.json();
  return payload.value || (payload.d && payload.d.results) || [];
}

function applySharePointItems(items) {
  const nextStateData = createEmptyStateData();
  let nextPresidencia = cloneData(PRESIDENCIA_RAW);

  [...items]
    .sort((a, b) => String(a.Estado || '').localeCompare(String(b.Estado || '')) || Number(a.ID || 0) - Number(b.ID || 0))
    .forEach(item => {
      const title = normalizeSharePointText(item.Title);
      const firstRepresentative = createRepresentative('1º Representante', item.Representante, item.Email, item.Contato);

      if (normalizeForCompare(title).startsWith('presidencia fundacao oswaldo cruz')) {
        nextPresidencia = {
          name: firstRepresentative ? firstRepresentative.name : '',
          email: firstRepresentative ? firstRepresentative.email : '',
          phone: firstRepresentative ? firstRepresentative.phone : ''
        };
        return;
      }

      const representatives = [
        firstRepresentative,
        createRepresentative(
          '2º Representante',
          item.OData__x0032__x00b0_Representante,
          item.Email_2_representante,
          item.Contato_2_representante
        ),
        createRepresentative(
          '3º Representante',
          item.OData__x0033__x00ba_Representante,
          item.Email_3_representante,
          item.Contato_3_representante
        )
      ].filter(Boolean);

      const uf = normalizeSharePointText(item.Estado).toUpperCase();
      if (!nextStateData[uf]) return;

      const office = {
        name: title,
        address: normalizeSharePointText(item.DispName),
        representatives
      };

      if (item.Portaria && item.Portaria.Url) {
        office.ordinanceUrl = normalizeSharePointText(item.Portaria.Url);
      }

      nextStateData[uf].offices.push(office);
    });

  STATE_DATA = nextStateData;
  PRESIDENCIA = nextPresidencia;
}

function renderCurrentState() {
  recalculateTotals();

  if (!activeUFs.includes(selectedUF)) {
    selectedUF = activeUFs[0] || '';
  }

  paintMap();

  if (selectedUF) {
    renderState(selectedUF);
  }
}

async function syncSharePointData({ silent = false } = {}) {
  if (!SHAREPOINT_CONFIG.enabled) return;

  if (!silent) {
    setSyncStatus('Sincronizando com SharePoint...', 'loading');
  }

  try {
    const items = await fetchSharePointItems();
    if (!items.length) {
      throw new Error('A lista do SharePoint retornou sem itens.');
    }

    applySharePointItems(items);
    renderCurrentState();
    setSyncStatus(`SharePoint atualizado ${formatSyncTime(new Date())}`, 'ok');
  } catch (error) {
    console.warn('Não foi possível sincronizar com o SharePoint. O mapa continua usando os dados locais.', error);
    setSyncStatus('Usando dados locais', 'error');
  }
}

function startSharePointSync() {
  if (!SHAREPOINT_CONFIG.enabled) return;

  syncSharePointData();
  window.setInterval(() => {
    syncSharePointData({ silent: true });
  }, SHAREPOINT_CONFIG.refreshMs);
}

// ===== RENDERIZAÇÃO DO ESTADO SELECIONADO =====
function renderState(uf) {
  const info = STATE_DATA[uf];
  if (!info) return;
  const cor = REGION_COLORS[info.region] || '#E8D8BD';

  // Card da Presidência (sempre exibido)
  const p = PRESIDENCIA || {};
  const presidenciaHtml = `
    <div class="presidencia-card">
      <div class="presidencia-icon">🏛️</div>
      <div>
        <p class="presidencia-label">Representante da Presidência</p>
        <p class="presidencia-name">${escapeHtml(p.name)}</p>
        <div class="presidencia-contato">
          ${isFilled(p.email) ? `<span>${ICONS.mail} ${escapeHtml(p.email)}</span>` : ''}
          ${isFilled(p.phone) ? `<span>${ICONS.phone} ${escapeHtml(p.phone)}</span>` : ''}
        </div>
      </div>
    </div>
  `;

  const officesHtml = info.offices.filter(isValidOffice).map((o, idx) => `
    <div class="office-card ${idx===0 ? 'open' : ''}" data-idx="${idx}">
      <div class="office-head">
        <div class="office-head-left">
          <div class="office-title">${escapeHtml(o.name)}</div>
          ${isFilled(o.address) ? `<div class="office-addr">${escapeHtml(o.address)}</div>` : ''}
        </div>
        <div class="office-chevron">${ICONS.chevron}</div>
      </div>
      <div class="office-body">
        <div class="office-body-inner">
          ${renderRepresentatives(o)}
        </div>
        ${renderOrdinanceLink(o)}
      </div>
    </div>
  `).join('');

 document.getElementById('panel-inner').innerHTML = `
  ${presidenciaHtml}

  <div id="summary-placeholder"></div>

  <span class="region-badge" style="background:${cor}22; color:${cor}; border:1px solid ${cor}55;">
    ${escapeHtml(info.region)}
  </span>

  <h2 class="state-name">${escapeHtml(info.name)}</h2>
  <p class="state-uf">${escapeHtml(info.uf)}</p>

  <div class="capital-card">
    <div class="capital-pin">${ICONS.pin}</div>
    <div>
      <p class="capital-label">Capital</p>
      <p class="capital-value">${escapeHtml(info.capital)}</p>
    </div>
  </div>

  <p class="offices-heading">
    ${ICONS.building} Rede de Escritórios de Projetos
  </p>

  ${officesHtml}
`;

  renderSummaryCards();

  document.querySelectorAll('.office-card').forEach(card => {
    card.querySelector('.office-head').addEventListener('click', () => {
      card.classList.toggle('open');
    });
  });
}

function selectState(uf) {
  if (!activeUFs.includes(uf)) return;
  selectedUF = uf;
  paintMap();
  renderState(uf);
}

// ===== EVENTOS =====
document.querySelectorAll('.state').forEach(el => {
  el.addEventListener('click', () => {
    const uf = el.getAttribute('data-uf');
    if (!activeUFs.includes(uf)) return;
    selectState(uf);
  });
});

// tooltip
const tooltip = document.getElementById('tooltip');
const tooltipName = document.getElementById('tooltip-name');
const tooltipSub = document.getElementById('tooltip-sub');

document.querySelectorAll('.state').forEach(el => {
  el.addEventListener('mouseenter', (e) => {
    const uf = el.getAttribute('data-uf');
    const info = STATE_DATA[uf];
    if (!info) return;
    tooltipName.textContent = info.name;
    const total = info.offices.filter(isValidOffice).length;
    tooltipSub.textContent = `${total} escritório${total>1?'s':''} · ${info.region}`;
    tooltip.style.opacity = '1';
  });
  el.addEventListener('mousemove', (e) => {
    tooltip.style.left = e.clientX + 'px';
    tooltip.style.top = e.clientY + 'px';
  });
  el.addEventListener('mouseleave', () => {
    tooltip.style.opacity = '0';
  });
});

// ===== ZOOM E PAN =====
const svgEl = document.getElementById('brazil-svg');
const viewport = document.getElementById('viewport');
let scale = 1, panX = 0, panY = 0;
let isDragging = false, startX = 0, startY = 0;

function applyTransform() {
  svgEl.style.transform = `translate(${panX}px, ${panY}px) scale(${scale})`;
}

document.getElementById('zoom-in').addEventListener('click', () => {
  scale = Math.min(scale * 1.25, 5);
  applyTransform();
});
document.getElementById('zoom-out').addEventListener('click', () => {
  scale = Math.max(scale / 1.25, 1);
  if (scale === 1) { panX = 0; panY = 0; }
  applyTransform();
});

viewport.addEventListener('wheel', (e) => {
  e.preventDefault();
  const delta = e.deltaY < 0 ? 1.1 : 0.9;
  scale = Math.min(Math.max(scale * delta, 1), 5);
  if (scale === 1) { panX = 0; panY = 0; }
  applyTransform();
}, { passive: false });

viewport.addEventListener('mousedown', (e) => {
  if (scale <= 1) return;
  isDragging = true;
  viewport.classList.add('dragging');
  startX = e.clientX - panX;
  startY = e.clientY - panY;
});
window.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  panX = e.clientX - startX;
  panY = e.clientY - startY;
  applyTransform();
});
window.addEventListener('mouseup', () => {
  isDragging = false;
  viewport.classList.remove('dragging');
});

// ===== INICIALIZAÇÃO =====
renderCurrentState();
startSharePointSync();
