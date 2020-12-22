import { inputTypes, numericTypes, textTypes } from './input-types.js'
import { props } from './input-props.js'

const propInputTypes = {
  accept: [inputTypes.FILE],
  capture: [inputTypes.FILE],
  dirname: [
    inputTypes.SEARCH,
    inputTypes.TEXT
  ],
  max: numericTypes,
  maxlength: textTypes,
  min: numericTypes,
  minlength: textTypes,
  multiple: [
    inputTypes.EMAIL,
    inputTypes.FILE
  ],
  pattern: [
    inputTypes.PASSWORD,
    inputTypes.TEL,
    inputTypes.TEXT
  ],
  placeholder: textTypes,
  size: [
    inputTypes.EMAIL,
    inputTypes.PASSWORD,
    inputTypes.TEL,
    inputTypes.TEXT
  ],
  step: numericTypes,
  tabindex: Object.values(inputTypes)
}

const propDefaultValues = {
  max: Number.MAX_VALUE,
  maxlength: props.maxlength.default,
  min: Number.MIN_VALUE,
  minlength: props.minlength.default,
  multiple: props.multiple.default,
  size: props.size.default,
  step: 1,
  tabindex: 0
}

const propsToIgnore = [
  'id',
  'label',
  'helpText'
]

function toKebabCase (str) {
  return str.replace(/([A-Z])/g, '-$1').toLowerCase()
}

function setBooleanAttribute (formInput, key, prop, propValue) {
  const value = checkBooleanValue(propValue)
  const attrName = toKebabCase(key)
  if (formInput.hasAttribute(attrName) && !value) {
    formInput.removeAttribute(attrName)
  } else if (value) {
    formInput.setAttribute(attrName, '')
  }
}

function setNumericAttribute (formInput, key, prop, propValue, instanceProps) {
  let value = propValue
  if (propInputTypes[key]) {
    // maxlength="${this.checkNumericValueType(textTypes, this.props.maxlength, props.maxlength.default)}"
    value = checkNumericValueType(instanceProps, propInputTypes[key], propValue, propDefaultValues[key])
  }

  const attrName = toKebabCase(key)
  if (formInput.hasAttribute(attrName) && value == null) {
    formInput.removeAttribute(attrName)
  } else if (value != null) {
    formInput.setAttribute(attrName, value)
  }
}

function setAttribute (formInput, key, propValue, instanceProps, propsDef) {
  if (ignoreProp(key)) {
    return
  }

  let value = propValue
  if (propInputTypes[key]) {
    // accept="${this.checkValueType([inputTypes.FILE], this.props.accept)}"
    value = checkValueType(instanceProps, propInputTypes[key], propValue)
  }

  const attrName = toKebabCase(key)
  if (formInput.hasAttribute(attrName) && value == null) {
    formInput.removeAttribute(attrName)
  } else if (value != null) {
    formInput.setAttribute(attrName, value)
  }
}

function checkBooleanValue (value) {
  return value || undefined
}

function checkNumericValue (value, defaultValue) {
  return value !== defaultValue ? value : undefined
}

function checkValueType (instanceProps, types, value, defaultValue) {
  return (types.indexOf(instanceProps.type) !== -1 && value !== defaultValue) ? value : undefined
}

function checkNumericValueType (instanceProps, types, value, defaultValue) {
  return (types.indexOf(instanceProps.type) !== -1 && value !== 0 && value !== defaultValue) ? value : undefined
}

function ignoreProp (key) {
  return propsToIgnore.indexOf(key) !== -1
}

export function setAttributes (formInput, propsDef, instanceProps) {
  for (const propsKey in instanceProps) {
    switch (propsDef[propsKey].type) {
      case Boolean:
        setBooleanAttribute(formInput, propsKey, propsDef[propsKey], instanceProps[propsKey])
        break
      case Number:
        setNumericAttribute(formInput, propsKey, propsDef[propsKey], instanceProps[propsKey], instanceProps)
        break
      default:
        setAttribute(formInput, propsKey, instanceProps[propsKey], instanceProps, propsDef)
    }
  }
}
