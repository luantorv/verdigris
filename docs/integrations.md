# Integraciones

[← Especificación](../DESIGN.md)

Verdigris persigue coherencia perceptiva, no igualdad técnica imposible. Cada adaptador mapea los roles soportados y documenta pérdidas o aproximaciones.

## NeoVim

Mapear primero editor, paneles, selección, foco, búsqueda y diagnósticos. Después cubrir Treesitter, LSP, completion, Git y plugins. El error usa rojo; warning arena; info azul claro. Diferencia cursor, selección visual y coincidencia de búsqueda.

La primera implementación propia de referencia se mantiene en [`luantorv/nixconf`](https://github.com/luantorv/nixconf).

## VSCodium

Cubrir editor, sidebar, tabs, status bar, terminal integrada, notifications y controles. Validar temas de alto contraste y evitar que el chrome de la aplicación compita con el código. Mantener equivalencia semántica con NeoVim cuando ambos expongan el mismo concepto.

La captura de referencia usa [Tapetum Verdigris](https://marketplace.visualstudio.com/items?itemName=tuguidragos.tapetum), principal inspiración cromática de este sistema.

## Terminal, shell y Starship

Asignar roles al prompt, directorio, Git, estado de salida y entorno. La salida CLI debe seguir siendo comprensible sin color. TUI debe distinguir foco, selección y cursor, y no asumir soporte truecolor sin fallback.

## KDE Plasma

Avanzar por panel y lanzador, menús, notificaciones, tooltips, widgets, decoración de ventanas y foco. Probar distintas escalas. Separar qué admite el tema nativo, qué requiere esquema de color y qué necesitaría widgets específicos.

## Qt, GTK y web

Priorizar componentes nativos accesibles. Mapear superficies y roles antes de ajustar píxeles. Las diferencias de métricas del toolkit se aceptan si se preservan ritmo, jerarquía y estado.

## Contrato de un adaptador

Cada integración debería indicar:

1. Versión y entorno probado.
2. Tabla de tokens soportados, aproximados y omitidos.
3. Capturas o fixtures de estados críticos.
4. Mecanismo de instalación y actualización.
5. Excepciones de accesibilidad o contraste.

## Orden de trabajo

1. Editores: NeoVim y VSCodium.
2. Terminal: emulador, Starship, shell, CLI y TUI.
3. Escritorio: KDE Plasma y widgets.
4. Aplicaciones Qt, GTK y web.
