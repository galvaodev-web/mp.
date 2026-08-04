# Mapa de Escritórios

<script>
window.location.replace('map/mapa01.html');
</script>

[Abrir mapa](map/mapa01.html)

Mapa interativo do Brasil sincronizado com a lista `Rede de Escritórios` no SharePoint.

## GitHub Pages

Quando o GitHub Pages estiver habilitado no repositório, o mapa ficará disponível em:

```text
https://galvaodev-web.github.io/mp./
```

## Rodar localmente

```bash
node server.js
```

Depois acesse:

```text
http://localhost:5317/
```

No Windows, também é possível abrir `abrir-mapa-sincronizado.bat`.

## Estrutura

- `map/mapa01.html`: página do mapa.
- `map/mapa01.css`: estilos.
- `map/mapa01.js`: renderização e sincronização dos dados.
- `server.js`: servidor local/proxy para ler os dados do SharePoint.
