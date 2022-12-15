{
let btn = document.getElementById("set")
let cla = document.getElementById("clear")
let todoList = []

btn.onclick = function (event) {
  let todo = document.getElementById("do").value
  if(todo == 0){
    alert("死ね！");
  }else {
    todoList[todoList.length] = todo;
    document.getElementById("list").innerHTML +=`<li>${todo}</li>`
  }
  console.log(todoList);
  document.getElementById("do").value = null;
}

cla.onclick = function (){
  let num = document.getElementById("num").value
  if (num == 0){
    alert("数字入れろボケ")
  }else {
    let num2 = parseInt(num)
    todoList.splice(num2-1,1)
    // let ulElement = document.getElementById( "list" ) ;
    // let child = ulElement.childElementCount ;
    // document.getElementById("list").remove();
    let li2 =  document.querySelector(`#list li:nth-child(${num2})`);
    li2.parentNode.removeChild(li2);
  }
  console.log(todoList);
  document.getElementById("num").value = null;
}
}