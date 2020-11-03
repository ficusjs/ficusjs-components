export function createSheet ({ createComponent, renderer, html }) {
  createComponent('fc-sheet', {
    renderer,
    props: {
      position: {
        type: String,
        default: 'top'
      },
      backdrop: {
        type: Boolean,
        default: false
      }
    },
    mounted () {
      this.addClasses()
    },
    show () {
      this.toggleSheet()
    },
    close () {
      this.toggleSheet()
    },
    addClasses () {
      const classes = ['fc-sheet']
      switch (this.props.position) {
        case 'right':
          classes.push('fc-sheet--right')
          break
        case 'bottom':
          classes.push('fc-sheet--bottom')
          break
        case 'left':
          classes.push('fc-sheet--left')
          break
        default:
          classes.push('fc-sheet--top')
      }
      classes.forEach(x => this.classList.add(x))
    },
    findParent (el, tester) {
      if (tester(el)) {
        return el
      }
      while (el.parentNode) {
        el = el.parentNode
        if (tester(el)) {
          return el
        }
      }
      return null
    },
    hideSheetHandler (e) {
      const ss = document.querySelectorAll('.fc-sheet--in-view')
      for (let i = 0; i < ss.length; i++) {
        const s = ss[i]
        const inSheet = this.findParent(e.target, el => el && el.classList && el.classList.contains('fc-sheet') && el.classList.contains('fc-sheet--in-view'))
        if (!inSheet) {
          e.preventDefault()
          e.stopPropagation()
          s.classList.remove('fc-sheet--in-view')
          window.removeEventListener('click', this.hideSheetHandler)
          this.emit('dismiss', {
            instance: s
          })
        }
      }
    },
    toggleSheet () {
      this.classList.toggle('fc-sheet--in-view')
      let action = 'close'
      if (this.classList.contains('fc-sheet--in-view')) {
        action = 'show'
      }
      this.emit(action, {
        instance: this
      })
      if (action === 'show') {
        // append to next event loop to prevent the event from firing immediately
        setTimeout(() => {
          window.addEventListener('click', this.hideSheetHandler)
        })
      }
      if (action === 'close') {
        window.removeEventListener('click', this.hideSheetHandler)
      }
    },
    render () {
      const inner = html`<div class="fc-sheet__inner">${this.slots.default}</div>`
      return this.props.backdrop ? html`<div class="fc-sheet__wrapper">${inner}</div>` : inner
    }
  })
}
