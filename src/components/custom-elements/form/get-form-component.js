export function getFormComponent (formInput) {
  switch (formInput.tagName.toLowerCase()) {
    case 'input':
      return formInput.closest('form-input')
    case 'select':
      return formInput.closest('form-select')
    case 'textarea':
      return formInput.closest('form-textarea')
  }
}
