export function createDropdown ({ createComponent, renderer, html }) {
  createComponent('fc-dropdown', {
    renderer,
    mounted () {
      const btn = this.querySelector('.fc-dropdown__button')
      const menu = this.querySelector('.fc-dropdown__menu')
      btn.addEventListener('click', e => {
        e.preventDefault()
        e.stopPropagation()
        menu.classList.toggle('fc-dropdown__menu--open')
        this.emit('toggle', {
          instance: this,
          isOpen: menu.classList.contains('fc-dropdown__menu--open')
        })
      })
    },
    render () {
      return html`<div class="fc__dropdown">
        <button type="button" class="fc-dropdown__button">Dropdown</button>
        <div class="fc-dropdown__menu">${this.slots.default}</div>
      </div>`
    }
  })
}
