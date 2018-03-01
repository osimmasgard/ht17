function run () {
  const interval = setInterval(function () { window.alert('Här kommer en uppmärksamhetsivran') }, 1000)
  window.confirm('En annan ruta (den första stängdes) men denna med möjlighet att avbryta')
  let namn = window.prompt('Vad heter du?')
  console.log(namn)

  const newWin = window.open('http://www.google.com')
  const delayed = setTimeout(function () { newWin.close() }, 3000)
  clearTimeout(delayed)
  clearInterval(interval)
}

$(document).ready(run())
