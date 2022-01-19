$(document).ready(function(){
 btn = $('#button')
 btn.click(function(){
 $.ajax({
  url: 'https://jsonplaceholder.typicode.com/todos',
  success: function(e){
   for(let string of e){
    console.log(string.id);
    console.log(string.title);
    if(string.completed == true )
    console.log('Completed');
    else{
     console.log('Not completed');
    }
   }
  },
  error: function(error){
   console.log(error);
  }
  })
 })
})