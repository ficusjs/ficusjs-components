export function loadComponents (use, baseComponents = [], helpers) {
  if (!baseComponents.length) return Promise.reject(new Error('No base components specified'))
  const components = {
    accordion: () => import('../custom-elements/accordion/index.js').then(m => use(m.module, helpers)),
    dropdown: () => import('../custom-elements/dropdown/index.js').then(m => use(m.module, helpers)),
    form: () => import('../custom-elements/form/index.js').then(m => use(m.module, helpers)),
    modal: () => import('../custom-elements/modal/index.js').then(m => use(m.module, helpers)),
    navbar: () => import('../custom-elements/navbar/index.js').then(m => use(m.module, helpers)),
    pagination: () => import('../custom-elements/pagination/index.js').then(m => use(m.module, helpers)),
    sheet: () => import('../custom-elements/sheet/index.js').then(m => use(m.module, helpers)),
    tabs: () => import('../custom-elements/tabs/index.js').then(m => use(m.module, helpers))
  }
  const componentPromises = baseComponents.map(a => components[a]())
  return Promise.all(componentPromises)
}
