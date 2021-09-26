export const inputTypes = Object.freeze({
  CHECKBOX: 'checkbox',
  COLOR: 'color',
  DATE: 'date',
  DATE_TIME: 'datetime-local',
  EMAIL: 'email',
  FILE: 'file',
  HIDDEN: 'hidden',
  MONTH: 'month',
  NUMBER: 'number',
  PASSWORD: 'password',
  RADIO: 'radio',
  RANGE: 'range',
  SEARCH: 'search',
  SUBMIT: 'submit',
  TEL: 'tel',
  TEXT: 'text',
  TIME: 'time',
  URL: 'url',
  WEEK: 'week'
})

export const numericTypes = [
  inputTypes.DATE,
  inputTypes.MONTH,
  inputTypes.WEEK,
  inputTypes.TIME,
  inputTypes.DATE_TIME,
  inputTypes.NUMBER,
  inputTypes.RANGE
]

export const textTypes = [
  inputTypes.PASSWORD,
  inputTypes.SEARCH,
  inputTypes.TEL,
  inputTypes.TEXT,
  inputTypes.URL
]

export const noLabelTypes = [
  inputTypes.HIDDEN,
  inputTypes.SUBMIT
]
