export class OptGroup {
  /**
   * An HTML <optgroup> class
   * @param {String} label The name of the group of options
   * @param {Array.<Option>} options The group of options
   * @param {Boolean} disabled None of the items in this option group is selectable
   */
  constructor (label, options, disabled = false) {
    this.label = label
    this.options = options
    this.disabled = disabled
  }
}

export class Option {
  /**
   * An HTML <options> class
   * @param {String} label The text indicating the meaning of the option
   * @param {String} value The value to be submitted with the form
   * @param {Boolean} selected This item is initially selected
   * @param {Boolean} disabled This item is not selectable
   */
  constructor (label, value, selected = false, disabled = false) {
    this.label = label
    this.value = value
    this.selected = selected
    this.disabled = disabled
  }
}
