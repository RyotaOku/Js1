{
  /*
  console.log("桃井先生おはよう");
  console.log("坂倉先生おはよう");
  console.log("宮崎先生おはよう");
  */

  /*
  // 命令を関数として定義
  function showMessage(){
    console.log("瀧本先生おはよう");
  }
  */



  // 定義した関数を利用
  showMessage("瀧本先生");
  showMessage("坂倉先生");
  showMessage("桃井先生");
  showMessage();
  showMessage("渡辺先生", "こんにちは");
  showMessage("ゲスト", "こんにちは");

  let name = "武田先生"

  // 引数を利用するバージョンに拡張
  function showMessage(name = "ゲスト") {
    console.log(`${name}おはよう`);
  }

  // 引数を複数利用するバージョンに拡張
  function showMessage(name = "ゲスト", message = "おはよう") {
    console.log(name, message);
  }



  // 戻り値のある関数を定義
  function strLen(str) {
    let result = 0;

    // result = str.length;
    result = (str.trim()).length;

    return result
  }

  console.log(strLen(" WD1A"));


  // 無名関数の定義
  let sum = function (num1 = 0, num2 = 0) {
    return num1 + num2
  }

  // 無名関数の利用
  console.log(sum(100, 14));


  // 新しい関数定義の書式(ES6以降)
  let sum2 = (num1,num2) => {
    return num1+num2
  }
}