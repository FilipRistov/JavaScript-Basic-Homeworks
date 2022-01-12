let title = document.getElementById("title")
let author = document.getElementById("author")
let stat = document.getElementById("status")
let btn = document.getElementById("btn")
btn.addEventListener("click", function(){
 let book = {
 title : title.value,
 author : author.value,
 stat : stat.value,
 readingStatus : function(){
  if(this.stat == 'true'){
   console.log(`Already read '${this.title}' by ${this.author}`);
  }
  else if(this.stat == 'false'){
   console.log(`You still need to read '${this.title}' by ${this.author}`);
  }
  else{
   console.log('Invalid input');
  }
 }
}
book.readingStatus()
})

