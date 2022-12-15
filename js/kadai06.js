{
  const img = document.querySelectorAll("#slider li")
  const next = document.getElementById("next")
  const back = document.getElementById("prev")
  let e = 0
  // e...element
  next.onclick = function () {
    let ne = (e < img.length - 1) ? e + 1 : 0;
    // 条件 ？ trueなら : falseなら　という形式で書く条件式
    // eの数値がimgの数から1引いた数未満 → trueならeに+1する / falseなら0 なにもしない
    // ne...next element
    img[e].style.display = 'none';
    img[ne].style.display = 'block';
    e = ne;
  }
  back.onclick = function () {
    let ne = (e > 0) ? e - 1 : img.length - 1;
    // eの数値が0未満 → trueならeに-1する / falseならimgの数から1引く
    // ne...next element
    img[e].style.display = 'none';
    img[ne].style.display = 'block';
    e = ne;
  }

  // {
  //   const img = document.querySelectorAll("#slider li")
  //   // console.log(img);
  //   const next = document.getElementById("next")
  // let e = 0
  // next.onclick = function (){

  // for (let i=0; i<img.length;i++){
  // // if(!img[i].style.display="none"){

  // // }
  // e+1
  // img[i+1].style.display="block"
  // img[i].style.display="none"
  // // if (!img[i].style.display "none"){}
  // // img.forEach(a,i => {
  // //   img[i+1].style.display=block;
  // // });
  // }
  // }

  // }
}