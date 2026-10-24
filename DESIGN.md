# Verdigris Design System

**Versión 0.1 · especificación de trabajo · octubre de 2026**

Verdigris es un lenguaje visual para entornos y herramientas de desarrollo. Su identidad combina superficies oscuras de matiz cálido, tipografía monoespaciada, módulos rectangulares, bordes finos y acentos cromáticos con función explícita.

Este documento es la referencia portátil del sistema: sirve para trasladar Verdigris a una aplicación web, un editor, una terminal o un escritorio sin depender de la implementación de este repositorio. Los detalles y ejemplos viven en [`docs/`](./docs/); los valores consumibles, en [`tokens/`](./tokens/).

## Principio rector

> Verdigris debe reconocerse incluso cuando se le quitan los colores.

La geometría, densidad, tipografía, jerarquía y tratamiento de bordes deben conservar la identidad. El color refuerza significados; no sustituye la estructura.

## Personalidad

- **Técnica:** se inspira en terminales, herramientas de desarrollo y sistemas configurables.
- **Sobria:** cada acento y efecto tiene una función.
- **Geométrica:** usa módulos rectangulares, alineaciones precisas y bordes finos.
- **Cálida:** evita el negro azulado habitual mediante superficies con matiz marrón.
- **Densa y legible:** prioriza información útil sin convertir la interfaz en una pared de texto.

La dirección visual es **industrial-digital, plana y modular**, con señales de color pequeñas y reconocibles.

## Reglas esenciales

1. Construye jerarquía con superficie, espaciado y tipografía antes de añadir color.
2. Reserva los colores saturados para identidad, acciones y estados relevantes.
3. Representa la elevación con cambios de superficie, no con sombras.
4. Usa bordes de bajo contraste solo cuando ayuden a agrupar o separar.
5. Mantén radios, alturas, márgenes e iconos consistentes por contexto.
6. No hagas competir título, icono, borde y acento a la vez.
7. Comunica los estados mediante más de una señal: color más texto, icono, forma o posición.
8. Prioriza foco, selección y error claramente visibles sobre la decoración.
9. Adapta la densidad: compacta en paneles operativos, más amplia en lectura.
10. Documenta cualquier aproximación cuando una plataforma no soporte los tokens exactos.

## Tokens de color

Los nombres semánticos son la API recomendada. Los nombres de paleta describen el color y sirven para construir esos roles, pero no deberían usarse directamente en componentes nuevos.

### Paleta base

| Token de paleta | Valor | Rol preferente |
| --- | --- | --- |
| `black` | `#141310` | Fondo principal |
| `white` | `#f4f1f0` | Texto principal e iconos destacados |
| `grey` | `#c7afab` | Texto secundario y elementos discretos |
| `dark-blue` | `#5589f7` | Estructura, navegación y tipos |
| `light-blue` | `#2ea1c7` | Información, enlaces y acciones secundarias |
| `green` | `#17c0ae` | Identidad, selección y acción primaria |
| `sand` | `#e3be3c` | Advertencias y atención |
| `red` | `#f23a50` | Errores y acciones destructivas |
| `lavender` | `#ae9afb` | Funciones, títulos secundarios y destacados |

### Superficies y contenido

| Token semántico | Valor | Uso |
| --- | --- | --- |
| `color-bg` / `surface-0` | `#141310` | Lienzo, escritorio o ventana principal |
| `color-surface` / `surface-1` | `#1b1917` | Barras, paneles y menús |
| `color-surface-raised` / `surface-2` | `#24201e` | Tarjetas y popovers |
| `color-surface-active` / `surface-3` | `#302b29` | Selección, hover fuerte o fila activa |
| `color-border` | `#3a3432` | Separadores y contornos |
| `color-border-strong` | `#554c48` | Contorno interactivo reforzado |
| `color-text` | `#f4f1f0` | Texto principal |
| `color-text-muted` | `#c7afab` | Texto secundario |
| `color-text-subtle` | `#958985` | Metadatos y texto de menor jerarquía |

### Roles de acento

| Token semántico | Valor | Significado |
| --- | --- | --- |
| `color-accent` | `#17c0ae` | Identidad, selección, foco y acción principal |
| `color-info` | `#2ea1c7` | Información y enlaces |
| `color-structure` | `#5589f7` | Navegación, categorías y tipos |
| `color-warning` | `#e3be3c` | Advertencias que requieren atención |
| `color-danger` | `#f23a50` | Error real o acción destructiva |
| `color-highlight` | `#ae9afb` | Funciones y elementos destacados |

El turquesa identifica Verdigris, pero no significa universalmente “éxito”. Los estados positivos deben incluir una etiqueta o icono explícitos. Consulta [color](./docs/color.md) para combinaciones, contraste y sintaxis.

## Geometría

Verdigris parte de una cuadrícula de **4 px**. Las dimensiones que no deban ajustarse ópticamente son múltiplos de esa unidad.

| Familia | Tokens | Valores |
| --- | --- | --- |
| Espacio | `space-1` a `space-8` | `4, 8, 12, 16, 24, 32, 48, 64 px` |
| Radio | `radius-sm`, `radius-md`, `radius-lg` | `2, 4, 6 px` |
| Borde | `border-width` | `1 px` |
| Control | `control-sm`, `control-md`, `control-lg` | `28, 32, 36 px` |
| Icono | `icon-sm`, `icon-md`, `icon-lg` | `16, 20, 24 px` |
| Lectura | `content-max` | `72rem` |

Usa rectángulos con esquinas discretas. Un radio no crece solo porque el componente sea importante. Los separadores son finos; las sombras no son parte del estilo predeterminado. Más detalle en [geometría](./docs/geometry.md).

## Tipografía

La familia principal es **JetBrains Mono**. Para una integración web resistente se recomienda esta pila:

```css
font-family: "JetBrains Mono", "Cascadia Code", "SFMono-Regular", Consolas, monospace;
```

| Rol | Tamaño | Peso | Interlineado |
| --- | ---: | ---: | ---: |
| Display | `24px` | 600 | 1.2 |
| Título | `20px` | 600 | 1.3 |
| Título de panel | `16px` | 500 | 1.4 |
| Interfaz | `14px` | 400 | 1.5 |
| Secundario | `13px` | 400 | 1.5 |
| Etiqueta técnica | `11px` | 600 | 1.3; tracking `0.08em` |
| Código | `14px` | 400 | 1.6 |
| Métrica | `28px` | 500 | 1.1; cifras tabulares |

La fuente monoespaciada aporta identidad, pero la jerarquía impide que toda la interfaz parezca código. Reserva la negrita para títulos, métricas y estados; las mayúsculas, para etiquetas breves como `SYSTEM` o `WORKSPACE`. Consulta [tipografía](./docs/typography.md).

## Iconografía

Usa una sola familia lineal, preferentemente Lucide cuando la plataforma lo permita, con trazo y caja visual consistentes.

- `16px` para controles compactos o iconos en línea.
- `20px` para la interfaz general.
- `24px` para una acción principal o widget.
- Evita mezclar familias o usar emojis como iconos funcionales.
- Añade texto visible o `aria-label` a las acciones ambiguas.
- El área interactiva puede ser mayor que el dibujo del icono.

## Componentes

El catálogo inicial incluye paneles, tarjetas, botones, campos, etiquetas, notificaciones, progreso, listas, tooltips, indicadores, menús y separadores. Cada componente comparte las mismas reglas de estado.

### Botones

- **Primario:** fondo `color-accent`, texto `color-on-accent` (`#141310`). Uno por grupo de decisión.
- **Secundario:** `surface-2`, borde y texto principal. Para acciones alternativas.
- **Discreto:** transparente; gana superficie en hover. Para baja jerarquía.
- **Destructivo:** rojo como borde o fondo según el riesgo; requiere etiqueta inequívoca.
- Altura recomendada: `32px`; objetivo mínimo táctil: `44px` cuando el contexto sea táctil.

### Campos

- Fondo `surface-0` o `surface-1` y borde visible.
- El foco añade un contorno exterior turquesa de `2px`; no cambia el layout.
- El error combina borde rojo, icono y mensaje asociado.
- El placeholder usa texto sutil y nunca sustituye una etiqueta.

### Tarjetas y paneles

- La diferencia de superficie puede bastar; evita bordes intensos innecesarios.
- Una tarjeta activa combina `surface-3` y un indicador turquesa.
- Las métricas usan cifras tabulares, unidad visible y contexto temporal.

### Etiquetas e indicadores

- Variantes: neutral, información, éxito, advertencia y error.
- Una etiqueta expresa una palabra o estado breve, no una oración.
- Un punto de color aislado necesita texto accesible.

### Notificaciones

- Distinguen prioridad, título, descripción y acción.
- Usan una línea lateral de color; el cuerpo mantiene superficie neutra.
- Las críticas no desaparecen automáticamente antes de ser leídas.

### Progreso, listas y menús

- El progreso determinado muestra porcentaje si este importa.
- La selección de fila combina superficie e indicador lateral.
- Las opciones deshabilitadas conservan legibilidad y no parecen seleccionadas.
- Los menús respetan orden, agrupación y navegación por teclado.

El inventario y los contratos completos están en [componentes](./docs/components.md).

## Estados e interacción

| Estado | Tratamiento |
| --- | --- |
| Hover | Cambio sutil de superficie o borde |
| Focus | Contorno turquesa de `2px`, visible y externo |
| Selected | `surface-3` más indicador secundario |
| Pressed | Cambio temporal de contraste o desplazamiento máximo de `1px` |
| Disabled | Texto atenuado, cursor coherente y acción bloqueada |
| Loading | Indicador estable; conserva el ancho del control |
| Error | Rojo más mensaje o icono explícito |
| Warning | Arena más explicación de la atención requerida |
| Success | Icono o texto inequívoco; no solo turquesa |

Las transiciones de superficie, color y opacidad duran entre **100 y 160 ms**. No animes de forma permanente widgets informativos. Bajo `prefers-reduced-motion: reduce`, elimina el movimiento no esencial. Consulta [interacción](./docs/interaction-states.md).

## Densidad e información

- Alinea cifras comparables y usa formatos constantes.
- Separa metadatos mediante tamaño y color, no únicamente con espacio.
- No encierres todo en una cuadrícula: dibuja líneas solo cuando expliquen estructura.
- Usa etiquetas pequeñas para orientar, no para reemplazar títulos.
- Mantén una medida de lectura de aproximadamente `60–75` caracteres.
- En paneles compactos usa espacios de `4–12px`; en lectura y marketing, `16–32px`.

## Accesibilidad

Verdigris aspira como mínimo a WCAG 2.2 AA en contenido e interacción web.

- Contrasta cada pareja de texto y superficie; pertenecer a la paleta no garantiza compatibilidad.
- Mantén foco visible para toda interacción por teclado.
- No dependas solo del color para selección, prioridad o estado.
- No reduzcas texto para acomodar más datos; cambia el layout o permite desplazamiento.
- Conserva nombres accesibles en controles de solo icono.
- Prueba zoom al 200 %, escalas de pantalla y navegación sin ratón.
- Respeta `prefers-reduced-motion` y, cuando sea viable, `forced-colors`.

Las parejas verificadas y la lista de revisión están en [accesibilidad](./docs/accessibility.md).

## Arquitectura de tokens

La fuente canónica es [`tokens/tokens.json`](./tokens/tokens.json). Los demás formatos son adaptadores mantenidos en el repositorio:

```text
tokens.json (core)
├── tokens.css
├── colors.nix
├── geometry.nix
└── typography.nix
```

La arquitectura objetivo tiene cinco capas:

1. **Core:** nombres y valores canónicos de color, tipografía, geometría y estados.
2. **Adapters:** conversión a formatos específicos.
3. **Applications:** configuraciones de cada herramienta.
4. **Documentation:** reglas, muestras y decisiones.
5. **Validation:** consistencia, valores faltantes y contraste.

La nomenclatura usa minúsculas y kebab-case en CSS/JSON. Un adaptador puede cambiar la sintaxis, no el significado.

### Uso mínimo en web

```html
<link rel="stylesheet" href="/tokens/tokens.css">
```

```css
.panel {
  color: var(--vg-color-text);
  background: var(--vg-color-surface);
  border: var(--vg-border-width) solid var(--vg-color-border);
  border-radius: var(--vg-radius-md);
  padding: var(--vg-space-4);
}
```

## Integraciones

El orden de implementación recomendado es:

1. **Editores:** NeoVim y VSCodium; sintaxis, LSP, diagnósticos, Git y chrome de interfaz.
2. **Terminal:** Starship, shell, CLI y TUI; selección, foco, errores, tablas y progreso.
3. **KDE Plasma:** panel, lanzador, notificaciones, widgets, decoración y foco de ventana.
4. **Aplicaciones:** adaptaciones Qt, GTK y web, priorizando coherencia perceptiva.

Las limitaciones conocidas y los contratos de cada destino se documentan en [integraciones](./docs/integrations.md).

## Hoja de ruta

### 0.1 · Core y referencia

- [x] Formalizar paleta, superficies y roles semánticos.
- [x] Definir tipografía, geometría, densidad y estados.
- [x] Crear tokens canónicos en JSON, CSS y Nix.
- [x] Documentar el catálogo inicial de componentes.
- [x] Publicar una demostración estática accesible.

### 0.2 · Validación en herramientas

- [ ] Probar temas de NeoVim y VSCodium.
- [ ] Probar Starship y una terminal completa.
- [ ] Capturar convivencia real entre editor y terminal.
- [ ] Automatizar validación de tokens y contraste.

### 0.3 · Escritorio

- [ ] Definir el panel y un conjunto pequeño de widgets.
- [ ] Adaptar menús, tooltips y notificaciones.
- [ ] Evaluar límites reales de KDE Plasma, Qt y GTK.
- [ ] Documentar excepciones por toolkit.

## Decisiones abiertas

La versión `0.1` adopta superficies planas, turquesa como acento global, densidad contextual y bordes selectivos como hipótesis de trabajo. Aún debe validarse:

- Si los paneles necesitan una elevación adicional muy sutil en contextos de escritorio.
- Si el acento de selección debe variar en editores por compatibilidad semántica.
- Qué densidad predeterminada resulta mejor en Plasma a distintas escalas.
- Si una futura variante clara aporta valor suficiente para ampliar el sistema.
- Qué personalizaciones de Plasma pueden ser nativas y cuáles requieren widgets.
- Si la integración declarativa con Nix debe convertirse en el adaptador principal.

## Criterios de aceptación

Una implementación es coherente con Verdigris cuando:

1. Los mismos roles usan los mismos tokens siempre que la plataforma lo permita.
2. Los estados se entienden sin depender exclusivamente del color.
3. Tipografía, espaciado y geometría mantienen una jerarquía reconocible.
4. Los componentes conservan función y legibilidad en distintos tamaños.
5. Las excepciones de cada plataforma están documentadas.
6. La experiencia completa se percibe consistente, no solo cada componente aislado.

## Gobernanza

Los cambios incompatibles en nombres o significado de tokens requieren una nueva versión y una guía de migración. Un cambio de valor que conserva significado puede entrar en una versión menor, acompañado de pruebas visuales y de contraste. Las aplicaciones deben consumir tokens semánticos; los valores hexadecimales directos se reservan a los adaptadores.

## Licencia y reutilización

La especificación, los tokens, la documentación y las implementaciones de referencia de Verdigris se distribuyen bajo la [Apache License 2.0](./LICENSE). Pueden usarse, modificarse y redistribuirse respetando sus condiciones y avisos aplicables.
