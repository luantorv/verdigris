# Estados e interacción

[← Especificación](../DESIGN.md)

## Contrato de estados

| Estado | Señal primaria | Señal secundaria |
| --- | --- | --- |
| Hover | Cambio de superficie | Borde opcional |
| Focus | Contorno turquesa de `2px` | Offset de `2px` |
| Selected | Superficie activa | Línea o marca turquesa |
| Pressed | Contraste temporal | Desplazamiento máximo de `1px` |
| Disabled | Menor contraste | Cursor y acción bloqueados |
| Loading | Indicador estable | Etiqueta actualizada |
| Error | Rojo | Icono y mensaje |
| Warning | Arena | Icono y explicación |
| Success | Icono de confirmación | Texto inequívoco |

El foco nunca se elimina sin reemplazo. La selección y el foco pueden coexistir: la primera expresa estado persistente; el segundo, ubicación de interacción.

## Movimiento

- Duración rápida: `100ms` para presión y feedback inmediato.
- Duración normal: `140ms` para color, superficie y opacidad.
- Duración lenta: `160ms` para entrada de popover o notificación.
- Curva: `cubic-bezier(.2, .8, .2, 1)`.

Evita bucles decorativos y movimiento permanente en métricas. El progreso indeterminado es la excepción cuando comunica trabajo en curso.

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Mensajes asíncronos

Una acción conserva su ancho durante la carga, impide envíos duplicados y anuncia el resultado a tecnologías de asistencia. Los errores persistentes requieren recuperación clara; los avisos no críticos pueden cerrarse y no reaparecer sin un cambio real de estado.
