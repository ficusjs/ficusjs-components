import { baseProps } from '../form/base-props.mjs'

export const props = {
  ...baseProps,
  cols: {
    type: Number,
    default: 20
  },
  maxlength: {
    type: Number,
    default: 0
  },
  minlength: {
    type: Number,
    default: 0
  },
  placeholder: {
    type: String
  },
  rows: {
    type: Number,
    default: 3
  },
  spellcheck: {
    type: Boolean
  },
  wrap: {
    type: String
  }
}
