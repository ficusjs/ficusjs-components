export function createLabel ({ createComponent, renderer, html }) {
  createComponent('fc-form-label', {
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
    setAttributes () {
      const label = this.querySelector('label')
      if (this.props.for && (!label.hasAttribute('for') || label.getAttribute('for') !== this.props.for)) label.setAttribute('for', this.props.for)
      if (this.props.required && !label.hasAttribute('required')) label.setAttribute('required', '')
    },
    mounted () {
      this.setAttributes()
    },
    updated () {
      this.setAttributes()
    },
    render () {
      return html`
        <label
          class="${this.labelClassName}"
        >${this.slots.default}</label>
      `
    }
  })
}
