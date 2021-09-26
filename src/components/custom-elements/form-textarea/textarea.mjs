import { props } from './textarea-props.mjs'
import { generateId } from '../form/generate-id.mjs'
import { setAttributes } from '../form/set-attributes.mjs'

export function createTextarea ({ createComponent, renderer, html }) {
  createComponent('fc-form-textarea', {
    renderer,
    props,
    computed: {
      internalId () {
        if (this.props.id) return this.props.id
        return generateId('textarea')
      },
      labelClassName () {
        return `fc-form-label${this.props.inline ? '' : ' fc-form-label--block'}`
      },
      for () {
        return !this.props.label ? '' : this.internalId
      }
    },
    mounted () {
      setAttributes(this.querySelector('textarea'), props, this.props)
    },
    updated () {
      setAttributes(this.querySelector('textarea'), props, this.props)
    },
    render () {
      return html`
        <div class="fc-form-group">
          <div class="fc-form-textarea">
            <label class="${this.labelClassName}" for="${this.for}">${this.props.label}</label>
            <textarea
              id="${this.internalId}"
              name="${this.props.name}"
            >${this.slots.default}</textarea>
          </div>
          <div aria-live="polite" class="fc-form-invalid-feedback">
            <span></span>
          </div>
          <div class="fc-form-help-text">${this.props.helpText}</div>
        </div>
      `
    }
  })
}
