import { createForm } from './form.js'
import { createHelpText } from '../form-help-text/help-text.js'
import { createLabel } from '../form-label/label.js'
import { createInput } from '../form-input/input.js'
import { createSelect } from '../form-select/select.js'
import { createTextarea } from '../form-textarea/textarea.js'
import { OptGroup, Option } from '../form-select/options.js'

const module = {
  create (helpers) {
    createForm(helpers)
    createHelpText(helpers)
    createLabel(helpers)
    createInput(helpers)
    createSelect(helpers)
    createTextarea(helpers)
  }
}

export { module, Option, OptGroup }
