{
  let readEle = document.querySelectorAll('.read')
  readEle[0].style.color = "tomato"
  readEle[1].style.color = "skyblue"
  readEle[2].style.color = "lightgreen"

  for (let i = 0; i < readEle.length; i++) {
    readEle[i].onclick = function (e) {
      readEle[i].style.color = ""
    }
    readEle[i].onclick = function (event) {
      readEle[i].style.color= "black"
      console.log(event.target);
      console.log(event.currentTarget);
      
      console.log(event.currentTarget.parentNode);
      // parentNodeは要素の親要素を参照します。
    }
  }
}