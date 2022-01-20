$(document).ready(function(){
 text = $('#text')
 color = $('#color')
 btn = $('#btn')
 message = $('#message')
 btn.click(function(){
   console.log(text.val());
  if(text.val() == '' || isColor(color.val()) == false){
   message.text('Error')
  }
  else{
    btn.after($(`<h1>${text.val()}</h1>`).css("color", color.val()));
  }
 })
})
function isColor(color){
  let s = new Option().style;
  s.color = color;
  return s.color == color;
}
