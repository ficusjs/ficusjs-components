export function createButton ({ createComponent, renderer, html }) {
  createComponent('fjs-button', {
    renderer,
    render () {
      return html`<button class="fjs__button">${this.slots.default}</button>`
    }
  })
}
