$(document).ready(function(){
i1 = $('#input1')
i2 = $('#input2')
i3 = $('#input3')
btn = $('#button')
h = $('#result')
btn.click(function(){
sum = parseFloat(i1.val())+parseFloat(i2.val())+parseFloat(i3.val())
avg = sum / 3
res = h.text(avg)
if(avg >= 10){
 res.css("color", "green")
 }
 else if(avg < 10){
  res.css("color", "red")
 }
})
})
