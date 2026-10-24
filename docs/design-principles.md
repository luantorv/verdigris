# Principios de diseño

[← Especificación](../DESIGN.md)

## 1. Estructura antes que color

Una vista debe mantener su jerarquía en escala de grises. Tamaño, espacio, alineación, superficie y borde indican primero qué pertenece a qué; el color añade significado.

## 2. Densidad con intención

Verdigris nace para herramientas ricas en información. Compactar no significa comprimir indiscriminadamente: un panel operativo puede usar la cuadrícula de 4 px, mientras que una explicación necesita pausas de 16–32 px y una medida de lectura controlada.

## 3. Acentos escasos

El turquesa identifica la acción o selección principal. Azul, arena, rojo y lavanda tienen roles distintos. Si todo está resaltado, nada lo está.

## 4. Elevación por superficie

Los cinco niveles de superficie crean profundidad sin sombras decorativas. Un borde aparece cuando el cambio de fondo no basta o cuando un control necesita un límite perceptible.

## 5. Estados explícitos

Foco, selección, error y deshabilitado deben distinguirse entre sí. Todo estado importante usa al menos dos señales, por ejemplo color y texto, o superficie e indicador lateral.

## 6. Consistencia perceptiva

Dos plataformas no necesitan implementaciones idénticas para sentirse Verdigris. Conserva roles, contraste, geometría, jerarquía y ritmo aunque el toolkit imponga componentes distintos.

## 7. Movimiento funcional

Las transiciones cortas explican un cambio; no decoran una pantalla estática. Nada esencial depende de la animación y la preferencia de movimiento reducido se respeta siempre.

## Lista de revisión

- ¿La jerarquía sobrevive sin acentos cromáticos?
- ¿Cada color saturado comunica algo concreto?
- ¿Se entiende qué elemento tiene el foco y cuál está seleccionado?
- ¿La densidad responde al propósito de la vista?
- ¿Hay efectos o bordes que puedan eliminarse sin perder información?
- ¿La aproximación de cada plataforma está documentada?
