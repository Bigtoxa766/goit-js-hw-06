const fontSizeEl = document.querySelector('#font-size-control')
const textEl = document.querySelector('#text')

const handleFontSize = () => {
  textEl.style.fontSize = `${fontSizeEl.value}px`
}

fontSizeEl.addEventListener('input', handleFontSize)