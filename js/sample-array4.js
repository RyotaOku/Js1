{
  function showClock1() {
    let nowTime = new Date(); //  現在日時を得る
    let nowHour = nowTime.getHours(); // 時を抜き出す
    let nowMin = nowTime.getMinutes(); // 分を抜き出す
    let nowSec = nowTime.getSeconds(); // 秒を抜き出す
    let msg = nowHour + ":" + nowMin + ":" + nowSec;
    document.getElementById("clock").innerHTML = msg;
  }
  setInterval('showClock1()', 100);

  function greetingSet() {
    let nowTime = new Date(); //  現在日時を得る
    let nowHour = nowTime.getHours(); // 時を抜き出す
  if (11 <= nowHour && nowHour <= 16) {
    var greeting = "Hello"
  } else if (17 <= nowHour || nowHour <= 3) {
    var greeting = "Good Evening"
  } else {
    var greeting = "Good Morning"
  }
  document.getElementById("greeting").innerHTML = greeting;
}
setInterval('greetingSet()', 100);


  // -----------------todoリスト-----------------



  let btn = document.getElementById("set")
  let cla = document.getElementById("clear")
  let todoList = []


  document.getElementById("do")
    .addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        todo()
      }
    });
  btn.addEventListener("click", function (evt) {
    todo()
  })

  function todo() {
    let todo = document.getElementById("do").value
    if (todo === "") {
      alert("中身が空です。");
    } else {
      todoList[todoList.length] = todo;
      document.getElementById("list").innerHTML += `<li>${todo}</li>`
    }
    console.log(todoList);
    document.getElementById("do").value = null;
  }

  document.getElementById("num")
    .addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        clear()
      }
    });
  cla.addEventListener("click", function (evt) {
    clear()
  })

  function clear() {
    let num = document.getElementById("num").value
    if (num == 0) {
      alert("数字を入れてください")
    } else {
      let num2 = parseInt(num)
      todoList.splice(num2 - 1, 1)
      // let ulElement = document.getElementById( "list" ) ;
      // let child = ulElement.childElementCount ;
      // document.getElementById("list").remove();
      let li2 = document.querySelector(`#list li:nth-child(${num2})`);
      li2.parentNode.removeChild(li2);
    }
    console.log(todoList);
    document.getElementById("num").value = null;
  }
}