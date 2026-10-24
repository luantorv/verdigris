# Integraciones

[← Especificación](../DESIGN.md)

Verdigris persigue coherencia perceptiva, no igualdad técnica imposible. Las dos referencias documentadas muestran el mismo lenguaje cromático en editores con estructuras distintas.

## NeoVim

La implementación propia conserva el fondo cálido, los roles de sintaxis y la diferenciación entre contenido, comentarios y estructura dentro de una composición de paneles densa.

La primera implementación propia de referencia se mantiene en [`luantorv/nixconf`](https://github.com/luantorv/nixconf).

## VSCodium

La referencia cubre editor, explorador, pestañas, barra de estado, minimapa y paneles divididos. El chrome de la aplicación se mantiene discreto para que el código conserve la jerarquía principal.

La captura de referencia usa [Tapetum Verdigris](https://marketplace.visualstudio.com/items?itemName=tuguidragos.tapetum), principal inspiración cromática de este sistema.

## Comparación

| Aspecto | VSCodium | NeoVim |
| --- | --- | --- |
| Procedencia | Tapetum Verdigris | Adaptación propia |
| Superficie | Interfaz completa del editor | NeoVim dentro de Konsole |
| Composición | Explorador y editores divididos | Tres buffers divididos |
| Fuente | [Tapetum Theme](https://marketplace.visualstudio.com/items?itemName=tuguidragos.tapetum) | [`luantorv/nixconf`](https://github.com/luantorv/nixconf) |
