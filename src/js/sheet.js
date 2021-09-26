document.getElementById('show-right-sheet-btn').addEventListener('click', e => {
  const sheet = document.querySelector('fc-sheet[position="right"]')
  sheet.toggleSheet()
})
document.getElementById('show-top-sheet-btn').addEventListener('click', e => {
  const sheet = document.querySelector('fc-sheet[position="top"]')
  sheet.toggleSheet()
})
document.getElementById('show-top-sheet-close-btn').addEventListener('click', e => {
  const sheet = document.querySelector('fc-sheet[position="top"]')
  sheet.toggleSheet()
})
