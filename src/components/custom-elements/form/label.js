export function createLabel ({ createComponent, renderer, html }) {
  createComponent('fc-label', {
    renderer,
    props: {
      for: {
        type: String
      },
      block: {
        type: Boolean
      },
      required: {
        type: Boolean
      }
    },
    computed: {
      labelClassName () {
        return (!this.slots.default && !this.props.for) ? 'fc-form__label--hidden' : `fc-form__label${this.props.block ? ' fc-form__label--block' : ''}`
      }
    },
    render () {
      return html`
        <label
          class="${this.labelClassName}"
          for="${this.props.for}"
          required="${this.props.required ? '' : undefined}"
        >${this.slots.default}</label>
      `
    }
  })
}
