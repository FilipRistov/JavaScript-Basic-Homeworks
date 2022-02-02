let btn = $("#btn");
let task = $("#task");
let arr = [];
let ul = $("#ul");
let text = $("text");
btn.click(array);

function ToDo(name, isCompleted) {
  this.name = name;
  this.status = isCompleted;
}
function array() {
  arr.push(new ToDo(task.val()));
  console.log(arr);
  ul.append(
    `<li><input type="checkbox" id="list"><label for="list">${task.val()}</label></li>`
  );
}
task.focus(function () {
  $(this).val("");
});
//Ne uspeav da sfatam kako da napravam da bide cross koa ke se odbere checkboxot
