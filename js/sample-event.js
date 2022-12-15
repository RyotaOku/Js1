{
  document.getElementById("evt_clicks").onclick = function () {
    document.getElementById("evt_clicks").style.color = "red"
  }

  document.getElementById("evt_clicks").ondblclick = function () {
    document.getElementById("evt_clicks").style.color = "blue"
  }

  document.getElementById("mouse").onmouseover = function () {
    document.getElementById("mouse").style.color = "skyblue"
  }

  document.getElementById("mouse").onmouseout = function () {
    document.getElementById("mouse").style.color = "";
  }

  document.getElementById("mouse").onmousemove = function () {
    console.log("共産主義");
  }

  document.getElementById("focus").onfocus = function () {
    document.getElementById("focus").style.outline = "2px solid red"
    document.getElementById("focus").style.border = "13px solid yellow"
  }
  // focusが離れた(blur)とき
  document.getElementById("focus").onblur = function () {
    document.getElementById("focus").style.outline = ""
    document.getElementById("focus").style.border = "1px gray solid"
  }

  // トランジションアニメーションが終わった時
  document.getElementById("transition").ontransitionend = function () {
    document.getElementById("transition").style.color = "gold";
  }

  // changeが変更された時
  // onchange → 変更が確定してから動く
  // oninput → 即時選択される。選んでいる間も。
  document.getElementById("change").oninput = function () {
    let color = document.getElementById("change")
    document.body.style.backgroundColor = color.value;
  }

  document.getElementById("back").onclick = function() {
    document.body.style.backgroundColor = ""
  }
}