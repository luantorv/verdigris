# Accesibilidad

[← Especificación](../DESIGN.md)

## Objetivo

Las implementaciones web deben cumplir como mínimo WCAG 2.2 AA. La apariencia oscura no garantiza legibilidad: cada combinación se valida por uso, tamaño y peso.

## Contraste

Las parejas principales de texto sobre superficies oscuras superan ampliamente el mínimo AA. El texto sutil se reserva para contenido no esencial y debe comprobarse cuando cambie el tamaño. Los acentos funcionan mejor como indicadores, bordes o texto de tamaño suficiente; un valor de la paleta no implica que sea apto sobre cualquier superficie.

Objetivos de referencia:

- `4.5:1` para texto normal.
- `3:1` para texto grande, gráficos esenciales y límites de controles.
- Estados perceptibles también sin color.

## Teclado y foco

- Todo control se alcanza en un orden lógico.
- El foco usa un anillo visible de `2px` con separación.
- Los componentes personalizados replican teclado y semántica nativos.
- Los enlaces se distinguen por más que color en texto continuo.
- Los atajos no bloquean patrones del navegador o del sistema.

## Texto y escala

- El cuerpo no baja de `13px` en escritorio ni depende de zoom reducido.
- La interfaz funciona al 200 % de zoom sin perder acciones o contenido.
- Las cifras comparables usan variantes tabulares cuando estén disponibles.
- Las mayúsculas solo aparecen en etiquetas breves y con espaciado suficiente.

## Movimiento y tiempo

- `prefers-reduced-motion` elimina movimiento no esencial.
- Ninguna animación parpadea a frecuencias peligrosas.
- Una notificación crítica permanece hasta que se atienda o cierre.
- Las actualizaciones en vivo usan regiones `aria-live` con la prioridad adecuada.

## Lista de pruebas

1. Recorrer la vista usando solo Tab, Shift+Tab, Enter, Espacio y flechas.
2. Verificar nombre, rol y estado con un lector de pantalla.
3. Probar zoom al 200 % y un viewport de 320 CSS px.
4. Activar reducción de movimiento y alto contraste/forced colors.
5. Simular deficiencias de visión cromática.
6. Confirmar que errores, selección y foco no dependen solo del color.
