import { inputTypes, numericTypes, textTypes } from '../form-input/input-types.mjs'
import { props } from '../form-input/input-props.mjs'

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
  if (formInput.tagName.toLowerCase() === 'select' || formInput.tagName.toLowerCase() === 'textarea') {
    value = checkNumericValue(propValue, propDefaultValues[key])
  } else if (formInput.tagName.toLowerCase() === 'input' && propInputTypes[key]) {
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
  return (value !== 0 && value !== defaultValue) ? value : undefined
}

function checkValueType (instanceProps, types, value, defaultValue) {
  return (types.indexOf(instanceProps.type) !== -1 && value !== defaultValue) ? value : undefined
}

function checkNumericValueType (instanceProps, types, value, defaultValue) {
  return (types.indexOf(instanceProps.type) !== -1 && value !== defaultValue) ? value : undefined
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
