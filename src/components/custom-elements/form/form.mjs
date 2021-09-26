/* global FormData */
import { messages } from './messages.mjs'
import { getFormComponent } from './get-form-component.mjs'

export function createForm ({ createComponent, renderer, html }) {
  createComponent('fc-form', {
    renderer,
    props: {
      options: {
        type: Object
      }
    },
    created () {
      this._touchedElements = {}
      this._customValidators = {}
      this._messages = { ...messages }
      // create messages object
      if (this.props.options && this.props.options.messages) {
        this._messages = { ...this._messages, ...this.props.options.messages }
      }
      // add custom validations
      if (this.props.options && this.props.options.customValidators) {
        this._customValidators = { ...this.props.options.customValidators }
      }
    },
    onSubmit (e) {
      e.preventDefault()
      e.stopPropagation()
      const isValid = e.target.checkValidity()
      if (isValid) {
        this.emitFormEvent(e)
      } else {
        this.showErrors(e.target)
      }
    },
    showErrors (form) {
      Array.from(form.elements)
        .filter(e => /input|select|textarea/.test(e.tagName.toLowerCase()))
        .forEach(e => {
          this.setTouched(e)
          this.showError(e)
        })
    },
    getFormData () {
      const form = this.querySelector('form')
      const formData = new FormData(form)
      const data = {}
      for (const pair of formData.entries()) {
        data[pair[0]] = pair[1]
      }
      return { formData, data }
    },
    getFormComponents () {
      const form = this.querySelector('form')
      return Array.from(form.elements).map(e => getFormComponent(e))
    },
    getNativeFormElements () {
      const form = this.querySelector('form')
      return form.elements
    },
    addCustomValidator (name, validator) {
      this._customValidators[name] = validator
    },
    onReset (e) {
      e.preventDefault()
      e.stopPropagation()
      this.emitFormEvent(e)
    },
    onInput (e) {
      this.handleInputOrChange(e)
    },
    onChange (e) {
      this.handleInputOrChange(e)
    },
    emitFormEvent (e) {
      const { formData, data } = this.getFormData(e.target)
      this.emit(e.type, {
        form: this,
        nativeFormElement: e.target,
        formData,
        data,
        originalEvent: e
      })
    },
    handleInputOrChange (e) {
      e.preventDefault()
      e.stopPropagation()
      const formInput = e.target
      this.setTouched(formInput)
      this.showError(formInput)
      const component = getFormComponent(formInput)
      this.emit(e.type, {
        component,
        nativeFormElement: formInput,
        name: formInput.getAttribute('name'),
        value: e.target.value,
        originalEvent: e
      })
    },
    setTouched (formInput) {
      const name = formInput.getAttribute('name')
      if (name && !this._touchedElements[name]) {
        this._touchedElements[name] = {
          formInput,
          touched: true
        }
        formInput.classList.add('ms-is-touched')
      }
    },
    showError (formInput) {
      const formComponent = getFormComponent(formInput)
      const formInputContainer = formInput.closest('.fc-form-group')
      const formError = formInputContainer.querySelector('.fc-form-invalid-feedback')
      const helpText = formInputContainer.querySelector('.fc-form-help-text')

      const clearInputValidation = () => {
        formInput.setCustomValidity('')
        formError.textContent = ''
        formError.classList.remove('fc-form-invalid-feedback--show')
        helpText.style.display = 'block'
      }

      const label = formComponent ? formComponent.getAttribute('label') : 'Input'
      const name = formInput.getAttribute('name')
      if (name && this._customValidators[name]) {
        const result = this._customValidators[name](label, formInput.value, formInput)
        if (result) {
          formInput.setCustomValidity(result)
          formError.textContent = result
          formError.classList.add('fc-form-invalid-feedback--show')
          helpText.style.display = 'none'
        } else {
          clearInputValidation()
        }
      } else if (formInput.validity.valid) {
        clearInputValidation()
      } else {
        formError.textContent = this.getMessage(formInput, label)
        formError.classList.add('fc-form-invalid-feedback--show')
        helpText.style.display = 'none'
      }
    },
    getMessage (formInput, label) {
      if (formInput.validity.valueMissing) {
        return this._messages.required(label)
      } else if (formInput.validity.badInput) {
        return this._messages.badInput(label)
      } else if (formInput.validity.patternMismatch) {
        return this._messages.pattern(label)
      } else if (formInput.validity.rangeOverflow) {
        return this._messages.max(label, formInput.max)
      } else if (formInput.validity.rangeUnderflow) {
        return this._messages.min(label, formInput.min)
      } else if (formInput.validity.stepMismatch) {
        return this._messages.stepMismatch(label)
      } else if (formInput.validity.tooLong) {
        return this._messages.maxlength(label)
      } else if (formInput.validity.tooShort) {
        return this._messages.minlength(label)
      } else if (formInput.validity.typeMismatch) {
        return this._messages.typeMismatch(label)
      } else {
        return this._messages.unknown(label)
      }
    },
    mounted () {
      const form = this.querySelector('form')
      form.addEventListener('submit', this.onSubmit)
      form.addEventListener('reset', this.onReset)
      form.addEventListener('input', this.onInput)
      form.addEventListener('change', this.onChange)
      this.classList.add('fc-form-container')
    },
    render () {
      return html`
        <form novalidate>${this.slots.default}</form>
      `
    }
  })
}
