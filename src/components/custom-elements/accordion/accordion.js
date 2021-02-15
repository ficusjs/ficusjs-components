export function createAccordion ({ createComponent, renderer, html }) {
  createComponent('fc-accordion', {
    renderer,
    mounted () {
      Array.from(this.querySelectorAll('details'))
        .forEach(d => d.addEventListener('toggle', this.onToggle))
    },
    onToggle (e) {
      e.preventDefault()
      e.stopPropagation()
      if (e.currentTarget.open) {
        Array.from(this.querySelectorAll('details'))
          .forEach(d => {
            if (d !== e.currentTarget && d.open) {
              d.open = false
            }
          })
      }
      this.emit('toggle', {
        instance: this,
        originalEvent: e
      })
    },
    render () {
      return html`${this.slots.default}`
    }
  })
}
