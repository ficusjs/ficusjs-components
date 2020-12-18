import { props } from './textarea-props.js'
import { generateId } from './generate-id.js'
import { noLabelTypes } from './input-types.js'
import { methods } from './methods.js'

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
        return (noLabelTypes.indexOf(this.props.type) > -1 || !this.props.label) ? undefined : this.id
      }
    },
    ...methods,
    checkValueType (value, defaultValue) {
      return value !== defaultValue ? value : undefined
    },
    checkNumericValueType (value, defaultValue) {
      return (value !== 0 && value !== defaultValue) ? value : undefined
    },
    render () {
      return html`
        <div class="fc-form__group">
          <div class="fc-form__textarea">
            <fc-label for="${this.for}">${this.props.label}</fc-label>
            <textarea
              autocomplete="${this.props.autocomplete}"
              autofocus="${this.checkBooleanValue(this.props.autofocus)}"
              cols="${this.checkNumericValueType(this.props.cols, props.cols.default)}"
              disabled="${this.checkBooleanValue(this.props.disabled)}"
              id="${this.internalId}"
              maxlength="${this.checkNumericValueType(this.props.maxlength, props.maxlength.default)}"
              minlength="${this.checkNumericValueType(this.props.minlength, props.minlength.default)}"
              name="${this.props.name}"
              placeholder="${this.checkValueType(this.props.placeholder)}"
              readonly="${this.checkBooleanValue(this.props.readonly)}"
              required="${this.checkBooleanValue(this.props.required)}"
              rows="${this.checkNumericValueType(this.props.rows, props.rows.default)}"
              spellcheck="${this.checkBooleanValue(this.props.spellcheck)}"
              tabindex="${this.checkNumericValue(this.props.tabindex, 0)}"
              title="${this.props.title}"
              wrap="${this.checkValueType(this.props.wrap)}"
            >
              ${this.slots.default}
            </textarea>
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
