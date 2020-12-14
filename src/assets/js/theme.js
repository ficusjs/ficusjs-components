const currentTheme = localStorage.getItem('theme')
const iFrameContent = document.getElementsByTagName("iframe")[0].contentWindow;

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme)
  iFrameContent.document.getElementsByTagName("html")[0].setAttribute('data-theme', currentTheme)
}

const darkToggleSwitch = document.getElementById('dark-theme-toggle')

darkToggleSwitch.onclick = function switchTheme(e) {
  document.documentElement.setAttribute('data-theme', 'dark')
  iFrameContent.document.getElementsByTagName("html")[0].setAttribute('data-theme', 'dark')
  localStorage.setItem('theme', 'dark')
}


const lightToggleSwitch = document.getElementById('light-theme-toggle')
lightToggleSwitch.onclick = function switchTheme(e) {
  document.documentElement.setAttribute('data-theme', 'light')
  iFrameContent.document.getElementsByTagName("html")[0].setAttribute('data-theme', 'light')
  localStorage.setItem('theme', 'light')
}