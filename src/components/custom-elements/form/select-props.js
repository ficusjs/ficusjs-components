import { baseProps } from './base-props.js'

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
