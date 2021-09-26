export function getFormComponent (formInput) {
  switch (formInput.tagName.toLowerCase()) {
    case 'input':
      return formInput.closest('fc-form-input')
    case 'select':
      return formInput.closest('fc-form-select')
    case 'textarea':
      return formInput.closest('fc-form-textarea')
  }
}
