import { createSelect } from './select.mjs'
import { OptGroup, Option } from './options.mjs'

const module = {
  create (helpers) {
    createSelect(helpers)
  }
}

export { module, OptGroup, Option }
