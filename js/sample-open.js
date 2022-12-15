{
let doc =document

let linkECC = doc.getElementById("linkECC")

linkECC.onclick = function (event) {

  // 検索範囲を限定する
  // let href = linkECC.querySelector("a")

  // event情報を活用する
  let href = event.target.href
  
  // window.open("https://comp.ecc.ac.jp/")
  window.open(href,"sample")
}
}
