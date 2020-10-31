export function createButton ({ createComponent, renderer, html }) {
  createComponent('fc-button', {
    renderer,
    render () {
      return html`<button class="fc__button">${this.slots.default}</button>`
    }
  })
}
