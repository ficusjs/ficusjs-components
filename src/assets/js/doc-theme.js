const currentTheme = window.localStorage.getItem('theme')

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme)
}
