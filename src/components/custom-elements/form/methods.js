export const methods = {
  checkBooleanValue (value) {
    return value || undefined
  },
  checkNumericValue (value, defaultValue) {
    return value !== defaultValue ? value : undefined
  },
  checkValueType (types, value, defaultValue) {
    return (types.indexOf(this.props.type) !== -1 && value !== defaultValue) ? value : undefined
  },
  checkNumericValueType (types, value, defaultValue) {
    return (types.indexOf(this.props.type) !== -1 && value !== 0 && value !== defaultValue) ? value : undefined
  }
}
