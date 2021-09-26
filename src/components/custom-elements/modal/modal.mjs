export function createModal ({ createComponent, renderer, html }) {
  createComponent('fc-modal', {
    renderer,
    props: {
      open: {
        type: Boolean,
        default: false
      }
    },
    mounted () {
      if (!window.HTMLDialogElement && !this.dialog.showModal) {
        import('https://unpkg.com/dialog-polyfill@latest/dist/dialog-polyfill.esm.js')
          .then(mod => mod.default.registerDialog(this.dialog))
      }
    },
    computed: {
      dialog () {
        return this.querySelector('dialog')
      }
    },
    showModal () {
      this.dialog.showModal()
    },
    close () {
      this.dialog.close()
    },
    render () {
      return html`<dialog class="fc-modal__dialog">${this.slots.default}</dialog>`
    }
  })
}
