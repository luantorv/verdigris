# Color

[← Especificación](../DESIGN.md) · [Tokens](../tokens/tokens.json)

## Modelo

La paleta se divide en tres capas: colores primitivos, superficies y roles semánticos. Los componentes consumen roles semánticos; los adaptadores son los únicos que deberían mapear valores primitivos.

| Familia | Valores |
| --- | --- |
| Neutros | `#141310`, `#1b1917`, `#24201e`, `#302b29`, `#3a3432`, `#554c48` |
| Contenido | `#f4f1f0`, `#c7afab`, `#958985` |
| Acentos | `#17c0ae`, `#2ea1c7`, `#5589f7`, `#e3be3c`, `#f23a50`, `#ae9afb` |

## Frecuencia y significado

- **Turquesa:** identidad, foco, selección y acción primaria. No equivale automáticamente a éxito.
- **Azul claro:** información, enlaces y acciones secundarias.
- **Azul intenso:** estructura, navegación, tipos o categorías.
- **Arena:** advertencias que requieren atención.
- **Rojo:** errores reales y acciones destructivas.
- **Lavanda:** funciones, métodos y destacados secundarios.

No uses todos los acentos en una misma vista salvo que el contenido realmente contenga todos esos significados.

## Parejas recomendadas

| Primer plano | Fondo | Uso |
| --- | --- | --- |
| `color-text` | `surface-0…3` | Contenido principal |
| `color-text-muted` | `surface-0…3` | Contenido secundario |
| `color-on-accent` | `color-accent` | Botón primario |
| `color-warning` | `surface-1` | Título o indicador de aviso |
| `color-danger` | `surface-1` | Error, con texto descriptivo adicional |

Los acentos no están autorizados automáticamente para párrafos pequeños. Ante una combinación nueva, mide el contraste y aumenta peso, tamaño o usa texto neutro junto a un indicador de color.

## Sintaxis de código sugerida

- Comentarios: texto sutil o cursiva moderada.
- Keywords y estructura: azul intenso.
- Funciones y métodos: lavanda.
- Strings y valores confirmados: turquesa.
- Números y constantes: arena.
- Diagnósticos informativos: azul claro.
- Errores: rojo, sin colorear bloques enteros cuando una marca localizada basta.

Estas asociaciones son una base compartida, no un tema completo: cada gramática y editor requiere validación.
