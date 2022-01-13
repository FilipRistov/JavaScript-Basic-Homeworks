let header = document.getElementById("myTitle")
header.innerText = "h1 is changed"

let paragraphs = document.getElementsByTagName("p");
paragraphs[0].innerText = "first paragraph is changed"
paragraphs[1].innerText = "second paragraph is changed"

let lastDiv = document.getElementsByTagName("div")[2]
lastDiv.firstElementChild.innerText = "This h1 is changed"
lastDiv.lastElementChild.innerText = "This h3 is changed"