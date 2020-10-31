/* global Node */

export function createTabs ({ createComponent, renderer, html }) {
  createComponent('fc-tabs', {
    renderer,
    computed: {
      tabs () {
        return this.slots.default
          .filter(s => s instanceof Node && s.nodeType === Node.ELEMENT_NODE && s.tagName.toLowerCase() === 'fc-tab-pane')
          .map((t, i) => {
            return {
              id: `tab-${i}`,
              label: t.getAttribute('label'),
              disabled: t.hasAttribute('disabled') && t.getAttribute('disabled') === 'true',
              node: t
            }
          })
      }
    },
    mounted () {
      this.setupEvents()
    },
    updated () {
      this.setupEvents()
    },
    setupEvents () {
      Array.from(this.querySelectorAll('input[type=radio]'))
        .forEach(r => {
          if (!r.hasAttribute('fc-event-listener')) {
            r.addEventListener('change', e => {
              e.preventDefault()
              e.stopPropagation()
              this.emit('change', { instance: this, value: e.target.value })
            })
            r.setAttribute('fc-event-listener', '')
          }
        })
    },
    render () {
      return html`
        <style>
          ${`
            ${this.tabs.map((t, i) => `.fc-tabs input[type=radio]:nth-of-type(${i + 1}):checked ~ fc-tab-pane:nth-of-type(${i + 1}) .fc-tabs__pane { display: block; }`).join('')}
          `}
        </style>
        <div class="fc-tabs">
          ${this.tabs.map((t, i) => html`
            <input type="radio" id="${t.id}" value="${t.label}" name="tab-control" .checked="${i === 0}" .disabled="${t.disabled}">
          `)}
          <ul class="fc-tabs__tabs">
            ${this.tabs.map(t => html`
              <li>
                <label for="${t.id}">
                  <span>${t.label}</span>
                </label>
              </li>
            `)}
          </ul>
          ${this.tabs.map(t => t.node)}
        </div>
      `
    }
  })
  createComponent('fc-tab-pane', {
    renderer,
    props: {
      label: {
        type: String
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    render () {
      return html`<div class="fc-tabs__pane">${this.slots.default}</div>`
    }
  })
}
