# Verdigris

Verdigris es un sistema de diseño oscuro para herramientas de desarrollo: técnico, cálido, modular y sobrio. Este repositorio contiene la especificación, los tokens canónicos y una demostración publicable en GitHub Pages.

## Empezar

- Consulta [DESIGN.md](./DESIGN.md) para aplicar la identidad en otro proyecto.
- Explora los fundamentos y componentes en [`docs/`](./docs/).
- Consume los formatos de [`tokens/`](./tokens/) en CSS, JSON o Nix.
- Abre [`index.html`](./index.html) para ver la demostración sin proceso de compilación.

## Estructura

```text
.
├── DESIGN.md              # Especificación portátil
├── docs/                  # Decisiones y guías detalladas
├── tokens/                # Fuente canónica y adaptadores iniciales
├── examples/              # Uso y catálogo de referencia
├── assets/                # Estilos y comportamiento de la demo
└── index.html             # Sitio de GitHub Pages
```

## Desarrollo local

El sitio es HTML, CSS y JavaScript nativo. Puede abrirse directamente o servirse con cualquier servidor estático:

```sh
python3 -m http.server 8000
```

No requiere dependencias ni compilación. La publicación automatizada está definida en [`.github/workflows/pages.yml`](./.github/workflows/pages.yml).

## Estado

Verdigris está en **versión 0.1**. Los fundamentos ya son utilizables, pero deben validarse en integraciones reales antes de estabilizar la API de tokens. Las decisiones abiertas se mantienen en [DESIGN.md](./DESIGN.md#decisiones-abiertas).

## Origen e inspiración

La identidad cromática de Verdigris está fuertemente inspirada en [Tapetum Verdigris](https://marketplace.visualstudio.com/items?itemName=tuguidragos.tapetum), parte de la extensión Tapetum Theme de Țugui Dragoș. La captura de VSCodium usa ese esquema; la adaptación para NeoVim es una implementación propia mantenida en [`luantorv/nixconf`](https://github.com/luantorv/nixconf).

## Licencia

Copyright © 2026 Luis Reis Viera

El código, los tokens, la documentación y los ejemplos de este repositorio se distribuyen bajo la [Apache License 2.0](./LICENSE) (`Apache-2.0`).
