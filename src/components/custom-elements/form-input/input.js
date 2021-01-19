import { props } from './input-props.js'
import { generateId } from '../form/generate-id.js'
import { inputTypes, noLabelTypes } from './input-types.js'
import { setAttributes } from '../form/set-attributes.js'

export function createInput ({ createComponent, renderer, html, nothing }) {
  createComponent('fc-form-input', {
    renderer,
    props,
    computed: {
      internalId () {
        if (this.props.id) return this.props.id
        return generateId('input')
      },
      className () {
        if (this.props.type === inputTypes.RADIO || this.props.type === inputTypes.CHECKBOX) {
          return `fc-form__check${this.props.switch ? ' fc-form__switch' : ''}`
        }
        if (this.props.type === inputTypes.RANGE) return 'fc-form__range'
        if (this.props.type === inputTypes.SUBMIT) return 'fc-form__submit'
        return 'fc-form__control'
      },
      containerClassName () {
        return (this.props.inline || this.props.type === inputTypes.SUBMIT) ? 'fc-form__group fc-form__group--inline' : this.props.type === inputTypes.RADIO || this.props.type === inputTypes.CHECKBOX ? 'fc-form__group fc-form__group--rc' : 'fc-form__group'
      },
      inputClassName () {
        return this.props.type === inputTypes.RADIO || this.props.type === inputTypes.CHECKBOX ? 'fc-form__input fc-form__input--reverse' : 'fc-form__input'
      },
      labelClassName () {
        return `fc-form__label${this.props.inline ? '' : ' fc-form__label--block'}`
      },
      isValidType () {
        return Object.values(inputTypes).indexOf(this.props.type) !== -1
      },
      for () {
        return (noLabelTypes.indexOf(this.props.type) > -1 || !this.props.label) ? '' : this.internalId
      }
    },
    created () {
      if (!this.isValidType) throw new Error(`${this.props.type} is not a valid input type`)
      this.classList.add('fc-form')
    },
    mounted () {
      setAttributes(this.querySelector('input'), props, this.props)
    },
    updated () {
      setAttributes(this.querySelector('input'), props, this.props)
    },
    render () {
      if (!this.isValidType) return nothing
      return html`
        <div class="${this.containerClassName}">
          <div class="${this.inputClassName}">
            <label class="${this.labelClassName}" for="${this.for}">${this.props.label}</label>
            <input
              name="${this.props.name}"
              id="${this.internalId}"
              type="${this.props.type}"
              class="${this.className}"
            >
            ${this.slots.default}
          </div>
          <div aria-live="polite" class="fc-form__invalid-feedback">
            <span></span>
          </div>
          <div class="fc-form__help-text">${this.props.helpText}</div>
        </div>
      `
    }
  })
}
