export function createDropdown ({ createComponent, renderer, html }) {
  const OPEN_CLASSNAME = 'fc-dropdown__menu--open'

  createComponent('fc-dropdown', {
    renderer,
    props: {
      dropdownTitle: {
        type: String,
      }
    },
    mounted () {
      const btn = this.querySelector('.fc-dropdown__button')
      const menu = this.querySelector('.fc-dropdown__menu')
      btn.addEventListener('click', e => {
        e.preventDefault()
        e.stopPropagation()
        menu.classList.toggle(OPEN_CLASSNAME)
        this.emit('toggle', {
          instance: this,
          isOpen: menu.classList.contains(OPEN_CLASSNAME)
        })
        if (menu.classList.contains(OPEN_CLASSNAME)) {
          window.addEventListener('click', this.hideDropdown)
        } else {
          window.removeEventListener('click', this.hideDropdown)
        }
      })
    },
    hideDropdown (e) {
      const dd = e.target.closest('fc-dropdown')
      if (!dd || dd !== this) {
        const menu = this.querySelector('.fc-dropdown__menu')
        menu.classList.remove(OPEN_CLASSNAME)
      }
    },
    render () {
      return html`<div class="fc-dropdown">
        <button type="button" class="fc-dropdown__button">${this.props.dropdownTitle}</button>
        <div class="fc-dropdown__menu">${this.slots.default}</div>
      </div>`
    }
  })
}
