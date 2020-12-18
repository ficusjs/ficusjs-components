export function createHelpText ({ createComponent, renderer, html }) {
  createComponent('fc-help-text', {
    renderer,
    render () {
      return html`
        <div class="fc-form__help-text">
          ${this.slots.default}
        </div>
      `
    }
  })
}
