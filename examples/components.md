# Ejemplos de componentes

Estos fragmentos consumen [`tokens/tokens.css`](../tokens/tokens.css). El catálogo interactivo completo está en [`index.html`](../index.html#components).

## Botón

```html
<button class="vg-button vg-button--primary" type="button">
  Apply changes
</button>
```

```css
.vg-button {
  min-height: var(--vg-control-md);
  padding-inline: var(--vg-space-3);
  border: var(--vg-border-width) solid var(--vg-color-border);
  border-radius: var(--vg-radius-md);
  font: inherit;
}

.vg-button--primary {
  color: var(--vg-color-on-accent);
  background: var(--vg-color-accent);
  border-color: var(--vg-color-accent);
}
```

## Campo con error

```html
<label for="branch">Branch name</label>
<input id="branch" aria-invalid="true" aria-describedby="branch-error">
<p id="branch-error">Use letters, numbers, /, - or _.</p>
```

## Métrica

```html
<article class="vg-metric" aria-labelledby="cpu-label">
  <p id="cpu-label">CPU usage</p>
  <p><strong>24</strong><span aria-hidden="true">%</span></p>
  <progress value="24" max="100">24%</progress>
</article>
```

## Notificación

```html
<aside class="vg-notice vg-notice--warning" role="status">
  <p class="vg-label">Warning · update available</p>
  <p>Hay una configuración nueva pendiente de aplicar.</p>
  <button type="button" aria-label="Cerrar aviso">×</button>
</aside>
```

## Lista seleccionable

```html
<nav aria-label="Workspace files">
  <a href="…" aria-current="page">DESIGN.md</a>
  <a href="…">tokens.json</a>
</nav>
```

Usa elementos nativos siempre que sea posible. Los atributos ARIA complementan la semántica; no corrigen un elemento elegido incorrectamente.
