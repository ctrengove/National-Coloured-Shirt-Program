const DEFAULT_PAGE_TITLE = 'National Coloured Shirt Program'

export function setPageTitle (state, { title }) {
  if (title && title.length > 0) {
    state.pageTitle = title
  } else {
    state.pageTitle = DEFAULT_PAGE_TITLE
  }
}
