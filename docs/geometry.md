# Geometría y espaciado

[← Especificación](../DESIGN.md)

## Cuadrícula

La unidad base es `4px`. La escala es `4, 8, 12, 16, 24, 32, 48, 64`. Usa valores intermedios solo para corrección óptica documentada.

| Contexto | Espacio habitual |
| --- | --- |
| Interior compacto | `4px` |
| Icono y etiqueta | `8px` |
| Elementos relacionados | `8–12px` |
| Interior de tarjeta | `12–16px` |
| Grupos o secciones | `16–24px` |
| Separación editorial | `32–64px` |

## Forma

- `2px`: campos y controles compactos.
- `4px`: botones y tarjetas.
- `6px`: contenedores amplios y popovers.
- `1px`: bordes y separadores.

Evita píldoras salvo que la semántica sea una etiqueta compacta o un estado. Una esquina redondeada no sustituye un sistema de espaciado.

## Altura y objetivos

Los controles de escritorio usan `28`, `32` o `36px`. En interfaces táctiles, conserva el dibujo compacto pero amplía el objetivo de interacción hasta al menos `44px`. Iconos: `16`, `20` y `24px`.

## Responsive

- Hasta `640px`: una columna, navegación horizontal simplificada y objetivos amplios.
- Desde `640px`: rejillas de dos columnas cuando la comparación lo justifica.
- Desde `960px`: navegación lateral o composiciones asimétricas.

Las rupturas responden al contenido, no a dispositivos concretos. Ningún bloque de texto debería superar aproximadamente `72rem` de ancho total ni `75` caracteres por línea para lectura continua.
