{

//マウス移動時
document.onmousemove = onmousemove;
onmousemove = function(e) {
  document.getElementById("client-x").value = e.clientX;
  document.getElementById("client-y").value = e.clientY;
  document.getElementById("screen-x").value = e.screenX;
  document.getElementById("screen-y").value = e.screenY;
  document.getElementById('global-x').value = document.documentElement.scrollLeft + e.clientX;
  document.getElementById('global-y').value = document.documentElement.scrollTop + e.clientY;
}


}