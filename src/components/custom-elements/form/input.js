import { props } from './input-props.js'
import { generateId } from './generate-id.js'
import { inputTypes, noLabelTypes, numericTypes, textTypes } from './input-types.js'
import { methods } from './methods.js'

export function createInput ({ createComponent, renderer, html, nothing }) {
  createComponent('fc-input', {
    renderer,
    props,
    computed: {
      internalId () {
        if (this.props.id) return this.props.id
        return generateId('input')
      },
      className () {
        return this.props.type === inputTypes.RADIO || this.props.type === inputTypes.CHECKBOX ? 'fc-form__check' : this.props.type === inputTypes.RANGE ? 'fc-form__range' : this.props.type === inputTypes.SUBMIT ? 'fc-form__submit' : 'fc-form__control'
      },
      containerClassName () {
        return (this.props.inline || this.props.type === inputTypes.SUBMIT) ? 'fc-form__group fc-form__group--inline' : this.props.type === inputTypes.RADIO || this.props.type === inputTypes.CHECKBOX ? 'fc-form__group fc-form__group--rc' : 'fc-form__group'
      },
      inputClassName () {
        return this.props.type === inputTypes.RADIO || this.props.type === inputTypes.CHECKBOX ? 'fc-form__input fc-form__input--reverse' : 'fc-form__input'
      },
      isValidType () {
        return Object.values(inputTypes).indexOf(this.props.type) !== -1
      },
      for () {
        return (noLabelTypes.indexOf(this.props.type) > -1 || !this.props.label) ? undefined : this.id
      }
    },
    ...methods,
    created () {
      if (!this.isValidType) throw new Error(`${this.props.type} is not a valid input type`)
    },
    render () {
      if (!this.isValidType) return nothing
      return html`
        <div class="${this.containerClassName}">
          <div class="${this.inputClassName}">
            <fc-label for="${this.for}">${this.props.label}</fc-label>
            <input
              accept="${this.checkValueType([inputTypes.FILE], this.props.accept)}"
              autocomplete="${this.props.autocomplete}"
              autofocus="${this.checkBooleanValue(this.props.autofocus)}"
              capture="${this.checkValueType([inputTypes.FILE], this.props.capture)}"
              checked="${this.checkBooleanValue(this.props.checked)}"
              dirname="${this.checkValueType([inputTypes.SEARCH, inputTypes.TEXT], this.props.dirname)}"
              disabled="${this.checkBooleanValue(this.props.disabled)}"
              id="${this.internalId}"
              inputmode="${this.props.inputmode}"
              list="${this.props.list}"
              max="${this.checkValueType(numericTypes, this.props.max, Number.MAX_VALUE)}"
              maxlength="${this.checkNumericValueType(textTypes, this.props.maxlength, props.maxlength.default)}"
              min="${this.checkValueType(numericTypes, this.props.min, Number.MIN_VALUE)}"
              minlength="${this.checkNumericValueType(textTypes, this.props.minlength, props.minlength.default)}"
              multiple="${this.checkValueType([inputTypes.EMAIL, inputTypes.FILE], this.props.multiple, props.multiple.default)}"
              name="${this.props.name}"
              pattern="${this.checkValueType([inputTypes.PASSWORD, inputTypes.TEL, inputTypes.TEXT], this.props.pattern)}"
              placeholder="${this.checkValueType(textTypes, this.props.placeholder)}"
              readonly="${this.checkBooleanValue(this.props.readonly)}"
              required="${this.checkBooleanValue(this.props.required)}"
              size="${this.checkNumericValueType([inputTypes.EMAIL, inputTypes.PASSWORD, inputTypes.TEL, inputTypes.TEXT], this.props.size, props.size.default)}"
              step="${this.checkValueType(numericTypes, this.props.step, 1)}"
              tabindex="${this.checkNumericValue(this.props.tabindex, 0)}"
              title="${this.props.title}"
              type="${this.props.type}"
              value="${this.props.value}"
              class="${this.className}"
            >
            ${this.slots.default}
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
