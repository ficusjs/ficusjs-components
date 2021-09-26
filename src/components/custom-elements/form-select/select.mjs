/* global Node */
import { props } from './select-props.mjs'
import { generateId } from '../form/generate-id.mjs'
import { Option, OptGroup } from './options.mjs'
import { setAttributes } from '../form/set-attributes.mjs'

export function createSelect ({ createComponent, renderer, html, nothing = '' }) {
  const createOption = o => {
    const opt = document.createElement('option')
    opt.setAttribute('value', o.value)
    opt.textContent = o.label
    if (o.selected) opt.setAttribute('selected', '')
    if (o.disabled) opt.setAttribute('disabled', '')
    return opt
  }

  createComponent('fc-form-select', {
    renderer,
    props,
    computed: {
      internalId () {
        if (this.props.id) return this.props.id
        return generateId('select')
      },
      labelClassName () {
        return `fc-form-label${this.props.inline ? '' : ' fc-form-label--block'}`
      },
      for () {
        return !this.props.label ? '' : this.internalId
      },
      selectOptions () {
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
    mounted () {
      setAttributes(this.querySelector('select'), props, this.props)
      this.classList.add('fc-form')
    },
    updated () {
      setAttributes(this.querySelector('select'), props, this.props)
    },
    render () {
      return html`
        <div class="${this.props.inline ? 'fc-form-group fc-form-group--inline' : 'fc-form-group'}">
          <div class="${this.props.multiple ? 'fc-form-select fc-form-select--multiple' : 'fc-form-select'}">
            <label class="${this.labelClassName}" for="${this.for}">${this.props.label}</label>
            <select
              id="${this.internalId}"
              name="${this.props.name}"
            >
              ${this.selectOptions}
            </select>
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
