import { props } from './textarea-props.js'
import { generateId } from './generate-id.js'
import { noLabelTypes } from './input-types.js'
import { setAttributes } from './set-attributes.js'

export function createTextarea ({ createComponent, renderer, html }) {
  createComponent('fc-textarea', {
    renderer,
    props,
    computed: {
      internalId () {
        if (this.props.id) return this.props.id
        return generateId('textarea')
      },
      for () {
        return (noLabelTypes.indexOf(this.props.type) > -1 || !this.props.label) ? '' : this.internalId
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
        <div class="fc-form__group">
          <div class="fc-form__textarea">
            <fc-label for="${this.for}">${this.props.label}</fc-label>
            <textarea
              id="${this.internalId}"
              name="${this.props.name}"
            >${this.slots.default}</textarea>
          </div>
          <div aria-live="polite" class="fc-form__invalid-feedback">
            <span></span>
          </div>
          <fc-help-text>${this.props.helpText}</fc-help-text>
        </div>
      `
    }
  })
}
