$(document).ready(function(){
 text = $('#input')
 btn = $('#button')
 btn.click(function(){
  btn.after(`<h1>Hello there ${text.val()}</h1>`)
 })
})