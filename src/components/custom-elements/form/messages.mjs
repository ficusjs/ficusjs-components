export const messages = Object.freeze({
  required: label => `${label} is required`,
  maxlength: label => `${label} is too long`,
  max: (label, max) => `${label} must be less than or equal to ${max}`,
  minlength: label => `${label} is too short`,
  min: (label, min) => `${label} must be greater than or equal to ${min}`,
  pattern: label => `${label} has a pattern mismatch`,
  badInput: label => `${label} has bad input`,
  stepMismatch: label => `${label} has a step mismatch`,
  typeMismatch: label => `${label} is not in the correct syntax`,
  unknown: label => `${label} has an unknown error`
})
