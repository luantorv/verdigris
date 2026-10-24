# Tipografía

[← Especificación](../DESIGN.md)

## Familia

JetBrains Mono es la familia de marca. Cuando no esté disponible, usa una pila monoespaciada nativa. No descargues fuentes sin considerar rendimiento y privacidad; para una interfaz embebida puede ser preferible respetar la fuente configurada por el usuario.

```css
font-family: "JetBrains Mono", "Cascadia Code", "SFMono-Regular", Consolas, monospace;
font-variant-numeric: tabular-nums;
```

## Escala

| Token | Valor | Uso |
| --- | ---: | --- |
| `font-size-xs` | `11px` | Etiqueta técnica |
| `font-size-sm` | `12px` | Metadatos compactos |
| `font-size-md` | `14px` | Interfaz y código |
| `font-size-lg` | `16px` | Título de panel |
| `font-size-xl` | `20px` | Título |
| `font-size-2xl` | `24px` | Display compacto |
| `font-size-metric` | `28px` | Métrica principal |

## Jerarquía

- Regular (`400`) para interfaz y lectura.
- Medium (`500`) para títulos de panel y métricas.
- Semibold (`600`) para títulos y etiquetas técnicas.
- Cursiva solo para comentarios o metadatos ocasionales.
- Mayúsculas únicamente en etiquetas cortas, con tracking `0.08em`.

## Legibilidad

El cuerpo usa interlineado `1.5`; código, `1.6`; títulos, `1.2–1.4`. No uses peso ligero sobre fondos oscuros. Limita los párrafos a unas `60–75` columnas y evita justificar texto. Números comparables deben alinearse y usar cifras tabulares.

La tipografía monoespaciada es parte del carácter, no una excusa para que toda información se vea igual: tamaño, peso, color y espacio construyen la jerarquía.
