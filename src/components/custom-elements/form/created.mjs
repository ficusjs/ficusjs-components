import { generateId } from './generate-id.mjs'

export function created () {
  let id = this.props.id
  if (!id) id = generateId('input')
  this.id = id
}
