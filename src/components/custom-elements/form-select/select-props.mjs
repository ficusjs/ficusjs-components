import { baseProps } from '../form/base-props.mjs'

export const props = {
  ...baseProps,
  inline: {
    type: Boolean
  },
  multiple: {
    type: Boolean,
    default: false
  },
  options: {
    type: Array
  }
}
