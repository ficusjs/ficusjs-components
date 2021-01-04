import { createSelect } from './select.js'
import { OptGroup, Option } from './options.js'

const module = {
  create (helpers) {
    createSelect(helpers)
  }
}

export { module, OptGroup, Option }
