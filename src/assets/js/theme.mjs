// Theme Toggle

const toggleSwitch = document.querySelector('#theme-toggle')
const ball = document.querySelector('.fd-theme-toggle__ball')
const currentTheme = window.localStorage.getItem('theme')

function setDarkTheme () {
  toggleSwitch.checked = true
  ball.setAttribute('style', 'transform:translatex(100%);')
}

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme)
  if (currentTheme === 'dark') {
    setDarkTheme()
  }
} else {
  if (window.matchMedia('(prefers-color-scheme: dark)').media !== 'not all') {
    setDarkTheme()
  }
}

toggleSwitch.addEventListener('change', e => {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark')
    window.localStorage.setItem('theme', 'dark')
    ball.setAttribute('style', 'transform:translatex(100%);')
  } else {
    document.documentElement.setAttribute('data-theme', 'light')
    window.localStorage.setItem('theme', 'light')
    ball.setAttribute('style', 'transform:translatex(0%);')
  }
})
