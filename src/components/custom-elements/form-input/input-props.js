import { baseProps } from '../form/base-props.js'

export const props = {
  ...baseProps,
  accept: {
    type: String
  },
  capture: {
    type: String
  },
  checked: {
    type: Boolean,
    default: false
  },
  dirname: {
    type: String
  },
  inline: {
    type: Boolean
  },
  inputmode: {
    type: String
  },
  list: {
    type: String
  },
  max: {
    type: Number,
    default: Number.MAX_VALUE
  },
  maxlength: {
    type: Number,
    default: 0
  },
  min: {
    type: Number,
    default: Number.MIN_VALUE
  },
  minlength: {
    type: Number,
    default: 0
  },
  multiple: {
    type: Boolean,
    default: false
  },
  pattern: {
    type: String
  },
  placeholder: {
    type: String
  },
  step: {
    type: Number,
    default: 1
  },
  switch: {
    type: Boolean
  },
  type: {
    type: String,
    default: 'text'
  },
  value: {
    type: String
  }
}
