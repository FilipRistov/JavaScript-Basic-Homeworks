let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => {
      response.json().then((data) => {
        for (let e of data) {
          console.log(e.id);
          console.log(e.title);
          if (e.completed == true) {
            console.log("Completed");
          } else {
            console.log("Not completed");
          }
        }
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
