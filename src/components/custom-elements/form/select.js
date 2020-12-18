/* global Node */
import { props } from './select-props.js'
import { generateId } from './generate-id.js'
import { inputTypes, noLabelTypes } from './input-types.js'
import { methods } from './methods.js'
import { Option, OptGroup } from './options.js'

export function createSelect ({ createComponent, renderer, html, nothing = '' }) {
  const createOption = o => {
    return html`
      <option
        value="${o.value}"
        selected="${!o.selected ? undefined : o.selected}"
        disabled="${!o.disabled ? undefined : o.disabled}"
      >${o.label}</option>
    `
  }

  createComponent('fc-select', {
    renderer,
    props,
    computed: {
      internalId () {
        if (this.props.id) return this.props.id
        return generateId('select')
      },
      for () {
        return (noLabelTypes.indexOf(this.props.type) > -1 || !this.props.label) ? undefined : this.id
      },
      options () {
        if (this.props.options) {
          if (!Array.isArray(this.props.options)) {
            console.error('Options must be an array of OptGroup or Option instances')
            return []
          }
          return this.props.options
            .map(o => {
              if (o instanceof OptGroup) {
                return html`
                  <optgroup
                    label="${o.label}"
                    disabled="${!o.disabled ? undefined : o.disabled}"
                    >
                    ${o.options.map(c => createOption(c))}
                  </optgroup>
                `
              } else if (o instanceof Option) {
                return createOption(o)
              } else {
                console.error('Unknown option - must be an instance of OptGroup or Option')
                return nothing
              }
            })
        } else if (this.slots.default) {
          return this.slots.default
            .filter(s => s.nodeType === Node.ELEMENT_NODE && s.tagName.toLowerCase() === 'option')
            .map(o => new Option(o.text, o.value, o.selected, o.disabled))
            .map(c => createOption(c))
        }
        return []
      }
    },
    ...methods,
    render () {
      return html`
        <div class="${this.props.inline ? 'fc-form__group fc-form__group--inline' : 'fc-form__group'}">
          <div class="${this.props.multiple ? 'fc-form__select fc-form__select--multiple' : 'fc-form__select'}">
            <fc-label for="${this.for}">${this.props.label}</fc-label>
            <select
              autocomplete="${this.props.autocomplete}"
              autofocus="${this.checkBooleanValue(this.props.autofocus)}"
              disabled="${this.checkBooleanValue(this.props.disabled)}"
              id="${this.internalId}"
              multiple="${this.checkValueType([inputTypes.EMAIL, inputTypes.FILE], this.props.multiple, props.multiple.default)}"
              name="${this.props.name}"
              readonly="${this.checkBooleanValue(this.props.readonly)}"
              required="${this.checkBooleanValue(this.props.required)}"
              size="${this.checkNumericValueType([inputTypes.EMAIL, inputTypes.PASSWORD, inputTypes.TEL, inputTypes.TEXT], this.props.size, props.size.default)}"
              tabindex="${this.checkNumericValue(this.props.tabindex, 0)}"
              title="${this.props.title}"
            >
              ${this.options}
            </select>
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
