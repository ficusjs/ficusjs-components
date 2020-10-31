export const components = {
  button: () => import('../custom-elements/button/index.js'),
  tabs: () => import('../custom-elements/tabs/index.js')
}

export function loadComponents (baseComponents = []) {
  if (!baseComponents.length) return Promise.reject(new Error('No base components specified'))
  const componentPromises = baseComponents.map(a => components[a]())
  return Promise.all(componentPromises)
}
