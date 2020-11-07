export const components = {
  accordion: () => import('../custom-elements/accordion/index.js'),
  dropdown: () => import('../custom-elements/dropdown/index.js'),
  modal: () => import('../custom-elements/modal/index.js'),
  sheet: () => import('../custom-elements/sheet/index.js'),
  tabs: () => import('../custom-elements/tabs/index.js')
}

export function loadComponents (baseComponents = []) {
  if (!baseComponents.length) return Promise.reject(new Error('No base components specified'))
  const componentPromises = baseComponents.map(a => components[a]())
  return Promise.all(componentPromises)
}
