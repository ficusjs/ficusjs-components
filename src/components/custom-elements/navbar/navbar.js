export function createNavbar ({ createComponent, renderer, html }) {
  const OPEN_CLASSNAME = 'fc-navbar__section--open'

  createComponent('fc-navbar', {
    renderer,
    mounted () {
      this.classList.add('fc-navbar')
      const btn = this.querySelector('.fc-navbar__toggler')
      const collapse = this.querySelector('section[slot="collapseSection"]')
      btn.addEventListener('click', e => {
        e.preventDefault()
        e.stopPropagation()
        collapse.classList.toggle(OPEN_CLASSNAME)
        this.emit('toggle', {
          instance: this,
          isOpen: collapse.classList.contains(OPEN_CLASSNAME)
        })
        if (collapse.classList.contains(OPEN_CLASSNAME)) {
          window.addEventListener('click', this.hideNavbarCollapse)
        } else {
          window.removeEventListener('click', this.hideNavbarCollapse)
        }
      })
    },
    hideNavbarCollapse (e) {
      const dd = e.target.closest('fc-navbar')
      if (!dd || dd !== this) {
        const collapse = this.querySelector('section[slot="collapseSection"]')
        collapse.classList.remove(OPEN_CLASSNAME)
      }
    },
    render () {
      return html`
      <svg class="fu-hidden" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg">
        <symbol id="menu" viewBox="0 0 48 48">
          <path d="M 5.5 9 A 1.50015 1.50015 0 1 0 5.5 12 L 42.5 12 A 1.50015 1.50015 0 1 0 42.5 9 L 5.5 9 z M 5.5 22.5 A 1.50015 1.50015 0 1 0 5.5 25.5 L 42.5 25.5 A 1.50015 1.50015 0 1 0 42.5 22.5 L 5.5 22.5 z M 5.5 36 A 1.50015 1.50015 0 1 0 5.5 39 L 42.5 39 A 1.50015 1.50015 0 1 0 42.5 36 L 5.5 36 z"/>
        </symbol>
      </svg>
      ${this.slots.toggleIcon}
      ${this.slots.leftSection}
      <div class="fc-navbar__toggler-wrapper">
        ${this.slots.rightSection}
        <button type="button" class="fc-navbar__toggler">
          <svg><use xlink:href="#menu" href="#menu"></use></svg>
        </button>
      </div>
      ${this.slots.collapseSection}`
    }
  })
}
