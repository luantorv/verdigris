# Tokens de Verdigris

[`tokens.json`](./tokens.json) es la fuente canónica. [`tokens.css`](./tokens.css) expone la misma API con el prefijo `--vg-`; los archivos Nix agrupan los valores por dominio.

Los consumidores deben preferir roles semánticos (`color.accent`, `color.danger`) a primitivas (`palette.green`, `palette.red`). Esta versión es `0.1.0`: los nombres todavía pueden cambiar antes de `1.0`, pero cualquier cambio debe documentarse en la especificación.

Los valores numéricos de JSON incluyen su unidad para evitar interpretaciones ambiguas entre adaptadores.

Estos tokens se distribuyen bajo la [Apache License 2.0](../LICENSE) (`Apache-2.0`).
