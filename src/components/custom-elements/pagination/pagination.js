import { paginate } from './paginate.js'

export function createPagination ({ createComponent, renderer, html }) {
  createComponent('fc-pagination', {
    renderer,
    state () {
      return {
        pager: null
      }
    },
    props: {
      totalItems: {
        type: Number,
        required: true
      },
      currentPage: {
        type: Number
      },
      pageSize: {
        type: Number
      },
      maxPages: {
        type: Number
      }
    },
    setPage (page) {
      this.state.pager = paginate(this.props.totalItems, page, this.props.pageSize, this.props.maxPages)
      this.emit('change', { instance: this, pager: this.state.pager })
    },
    created () {
      this.state.pager = paginate(this.props.totalItems, this.props.currentPage, this.props.pageSize, this.props.maxPages)
    },
    mounted () {
      this._setupEvents()
    },
    updated () {
      this._setupEvents()
    },
    _setupEvents () {
      Array.from(this.querySelectorAll('button'))
        .forEach(btn => {
          if (!btn.hasAttribute('fc-event-listener')) {
            btn.addEventListener('click', e => {
              e.preventDefault()
              e.stopPropagation()
              if (btn.dataset.page === 'first') this.setPage(1)
              if (btn.dataset.page === 'previous') this.setPage(this.state.pager.currentPage - 1)
              if (btn.dataset.page === 'next') this.setPage(this.state.pager.currentPage + 1)
              if (btn.dataset.page === 'last') this.setPage(this.state.pager.totalPages)
            })
            btn.setAttribute('fc-event-listener', '')
          }
        })
    },
    render () {
      return html`<div class="fc-pagination">
        <button type="button" data-page="first" class="fc-pagination__first">First</button>
        <button type="button" data-page="previous" class="fc-pagination__previous">Previous</button>
        ${this.state.pager.pages.map(page => html`
          <button type="button" data-page="${page}" class="${`fc-pagination__page${this.state.pager.currentPage === page ? ' fc-pagination__page--active' : ''}`}">${page}</button>
        `)}
        <button type="button" data-page="next" class="fc-pagination__next">Next</button>
        <button type="button" data-page="last" class="fc-pagination__last">Last</button>
      </div>`
    }
  })
}
