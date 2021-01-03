// Theme Toggle

const toggleSwitch = document.querySelector('#theme-toggle')
const iFrameContent = document.getElementsByTagName("iframe")[0].contentWindow
const box = document.querySelector('.fd-theme-toggle__inner')
const ball = document.querySelector('.fd-theme-toggle__ball')
const logo = document.getElementById('ficus-logo')
const darkThemeLogo = document.getElementById('ficus-logo-white')
console.log(toggleSwitch)
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;

    ball.setAttribute('style','transform:translatex(100%);')
    logo.style.display = 'none'
    darkThemeLogo.style.display = 'block'
  }
}



toggleSwitch.addEventListener('change', e => {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    iFrameContent.document.getElementsByTagName("html")[0].setAttribute('data-theme', 'dark')
    localStorage.setItem('theme', 'dark')
    ball.setAttribute('style','transform:translatex(100%);')
    logo.style.display = 'none'
    darkThemeLogo.style.display = 'block'
  }
  else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    iFrameContent.document.getElementsByTagName("html")[0].setAttribute('data-theme', 'light')
    ball.setAttribute('style','transform:translatex(0%);')
    logo.style.display = 'block'
    darkThemeLogo.style.display = 'none'
  }    
})