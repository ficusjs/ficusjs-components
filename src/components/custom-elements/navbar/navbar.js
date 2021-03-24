export function createNavbar ({ createComponent, renderer, html }) {
  const OPEN_CLASSNAME = 'fc-navbar__collapse--open'

  createComponent('fc-navbar', {
    renderer,
    mounted () {
      this.classList.add('fc-navbar')
      const btn = this.querySelector('.fc-navbar__toggler')
      const collapse = this.querySelector('section.fc-navbar__collapse')
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
        const collapse = this.querySelector('section.fc-navbar__collapse')
        collapse.classList.remove(OPEN_CLASSNAME)
      }
    },
    render () {
      return html`
        ${this.slots.default}
      `
    }
  })
}
