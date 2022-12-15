{
  const nav = document.getElementById("category-navi")
  document.addEventListener("scroll",function() {
    nav.style.top = document.documentElement.scrollTop + "px"
  })
}