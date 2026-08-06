# Mapa de Escritórios

[Abrir mapa](map/mapa01.html)

Mapa interativo do Brasil sincronizado com a lista `Rede de Escritórios` no SharePoint.

## GitHub Pages

Quando o GitHub Pages estiver habilitado no repositório, o mapa ficará disponível em:

```text
https://galvaodev-web.github.io/mp./
```

## Rodar localmente

```bash
node local/server.js
```

Depois acesse:

```text
http://localhost:5317/
```

No Windows, também é possível abrir `local/abrir-mapa-sincronizado.bat`.

## Estrutura

- `index.html`: entrada do GitHub Pages.
- `map/`: arquivos do mapa.
- `local/`: servidor local/proxy para ler os dados do SharePoint.
- `.github/workflows/`: publicação automática no GitHub Pages.
