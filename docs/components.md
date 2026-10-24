# Componentes

[← Especificación](../DESIGN.md) · [Ejemplos](../examples/components.md) · [Demo](../index.html#components)

## Convenciones comunes

Todos los componentes usan tokens semánticos, foco visible, estados no cromáticos y dimensiones de la escala. Los textos del ejemplo son orientativos; la etiqueta real debe describir la acción o información.

## Catálogo

| Componente | Variantes iniciales | Requisito esencial |
| --- | --- | --- |
| Panel | normal, elevado, activo | La superficie expresa jerarquía |
| Tarjeta | simple, métrica, información, estado | No acumular adornos redundantes |
| Botón | primario, secundario, discreto, destructivo | Etiqueta de acción clara |
| Campo | normal, enfocado, inválido, deshabilitado | Etiqueta persistente y error asociado |
| Etiqueta | neutral, información, éxito, advertencia, error | Texto corto junto al color |
| Notificación | información, éxito, advertencia, error | Prioridad, título y descripción |
| Progreso | determinado, indeterminado, crítico | Valor textual cuando sea relevante |
| Lista | normal, seleccionada, resaltada, deshabilitada | Selección distinta del foco |
| Tooltip | compacto, descriptivo | Complementa, no contiene información imprescindible |
| Indicador | inactivo, activo, ocupado, error | Nombre accesible |
| Menú | normal, seleccionado, deshabilitado | Navegación por teclado |
| Separador | horizontal, vertical, de grupo | Solo cuando explica estructura |

## Botón

El primario usa `color-accent` y `color-on-accent`. El secundario usa `surface-2` y borde. El discreto gana superficie en hover. El destructivo reserva rojo para una consecuencia real y puede requerir confirmación. Mantén una única acción primaria por grupo.

## Campo

La etiqueta es siempre visible. El placeholder muestra formato o ejemplo, nunca el nombre del dato. El foco agrega contorno sin mover el layout. Un error asocia el mensaje con `aria-describedby` y, cuando corresponda, `aria-invalid="true"`.

## Tarjeta y métrica

Una tarjeta no es el contenedor universal. Úsala para una unidad independiente o accionable. Las métricas incluyen nombre, valor, unidad y contexto; sus cifras son tabulares. El color del valor puede reforzar estado, no ser su única explicación.

## Etiqueta

Las etiquetas breves pueden usar mayúsculas técnicas. Una etiqueta de éxito no reutiliza automáticamente el acento: añade icono o texto como `OK`, `READY` o `SYNCED`.

## Notificación

La línea lateral comunica clase; el título y la descripción comunican el significado. La acción de cierre tiene nombre accesible. Usa `role="status"` para información no urgente y `role="alert"` solo para interrupciones importantes.

## Lista y menú

Las filas seleccionadas usan `surface-3` y un indicador. Hover no debe parecer selección persistente. Los menús personalizados solo se justifican cuando la semántica nativa no basta; en caso contrario, usa botones, enlaces y listas normales.

## Tooltip

Se abre con hover y foco, se cierra con Escape y no recibe contenido interactivo. Si la explicación es necesaria para completar una tarea, debe estar visible en la interfaz.

## Criterio de terminado

Un componente está listo cuando dispone de contenido realista, todos los estados, uso con teclado, nombre accesible, comportamiento responsive y contraste comprobado; además, su excepción por plataforma queda documentada.
