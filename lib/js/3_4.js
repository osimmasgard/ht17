$('.hide').click(function () {
  $('.content').hide()
})

$('.show').click(function () {
  $('.content').show()
})

$('.toggle').click(function () {
  $('.content').toggle()
})

$('.hide1').click(function () {
  $('.content').fadeOut('slow')
})

$('.show1').click(function () {
  $('.content').fadeIn('slow')
})

$('.toggle1').click(function () {
  $('.content').fadeToggle('slow')
})

$('.fadeto').click(function () {
  $('.content').fadeTo('slow', 0.5)
})

$('.fadeto1').click(function () {
  $('.content').fadeTo('slow', 1)
})

$('.animate').click(function () {
  $('.content').animate({top: '+=150px'}, 'slow', 'swing', blink)
})

$('.animate1').click(function () {
  $('.content').animate({top: '150px'})
})

function blink () {
  setInterval($('.content').animate({top: '-=150px'}, 2000))
}
