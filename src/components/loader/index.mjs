export function loadComponents (use, baseComponents = [], helpers) {
  if (!baseComponents.length) return Promise.reject(new Error('No base components specified'))
  const components = {
    accordion: () => import('../custom-elements/accordion/index.mjs').then(m => use(m.module, helpers)),
    dropdown: () => import('../custom-elements/dropdown/index.mjs').then(m => use(m.module, helpers)),
    form: () => import('../custom-elements/form/index.mjs').then(m => use(m.module, helpers)),
    formInput: () => import('../custom-elements/form-input/index.mjs').then(m => use(m.module, helpers)),
    formSelect: () => import('../custom-elements/form-select/index.mjs').then(m => use(m.module, helpers)),
    formTextarea: () => import('../custom-elements/form-textarea/index.mjs').then(m => use(m.module, helpers)),
    modal: () => import('../custom-elements/modal/index.mjs').then(m => use(m.module, helpers)),
    navbar: () => import('../custom-elements/navbar/index.mjs').then(m => use(m.module, helpers)),
    pagination: () => import('../custom-elements/pagination/index.mjs').then(m => use(m.module, helpers)),
    sheet: () => import('../custom-elements/sheet/index.mjs').then(m => use(m.module, helpers)),
    tabs: () => import('../custom-elements/tabs/index.mjs').then(m => use(m.module, helpers))
  }
  const componentPromises = baseComponents.map(a => components[a]())
  return Promise.all(componentPromises)
}
