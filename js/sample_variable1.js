
{
  /* 奥綾太の書き方
  document.getElementById("btn_calc").onclick = function() {
    const prices = document.getElementById("input_price").value;
    let price = parseInt(prices)
    let result = (price * 1.1) - price
    let result2 =Math.floor(result);
    console.log(result2);
    document.getElementById("tax").innerHTML = result2
  }
  */

  /* 変数になる前
  document.querySelector("#btn_calc").onclick = function(event){
    // #input_priceの入力内容の消費税を#taxに表示する。
    document.querySelector("#tax").innerText =
    document.querySelector("#input_price").value *10
  }
  */

  // ココから変数にします
  let calcButton = document.getElementById("btn_calc")
  let inputPrice = document.getElementById("input_price")
  let taxArea = document.getElementById("tax")
  let taxRate = 0.1
  // ↑のようにしておけば、修正が必要な際の作業量が大幅に短縮できる。

  calcButton.onclick = function(event){
    taxArea.innerText = inputPrice.value * taxRate
    console.log(event);
  }
}