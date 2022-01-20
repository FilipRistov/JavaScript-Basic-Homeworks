$(document).ready(function(){
 text = $('#text')
 color = $('#color')
 btn = $('#btn')
 btn.click(function(){
  console.log(text.val(), color.val());
 })
 h3 = $('h3')
 h3.text('Changed text')
 div = $('div')
 div.html('<p>Enter paragraph in div</p>')
})