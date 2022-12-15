{
  let num1 = 20
  let num2 = 20
  console.log("num1 = 20  /  num2 = 20");
  console.log("num1はnum2未満か",num1 > num2);
  // num1はnum2未満ですか？ => false

  console.log("num1はnum2より大きいか",num1 < num2);
  // num1はnum2より大きいですか？ => false

  console.log("num1はnum2以上か",num1 >= num2);
  // num1はnum2以上ですか？ => true

  console.log("num1はnum2以下か",num1 <= num2);
  // num1はnum2以下ですか？ => true

  console.log(" ");
// -------------------------------------------------
console.log("---------------------------------------------");
console.log(" ");
console.log('var1 = "144"  /  var2= 144  /  var3 = "WD1"  /  var4 = "wd1"');


  let var1 = "144"
  let var2 = 144
  let var3 = "WD1"
  let var4 = "wd1"

  console.log("var1とvar2は等しいか",var1 == var2);
  // var1とvar2は等しいですか？
  console.log('var1とvar2は"厳密に"等しいか',var1 === var2);
  // var1とvar2は"厳密に"等しいですか？

  console.log("var1とvar2は等しくないか",var1 != var2);
  // var1とvar2は等しくないですか？
  console.log('var1とvar2は"厳密に"等しくないか',var1 !== var2);
  // var1とvar2は"厳密に"等しくないですか？

  // 大文字小文字の判定
console.log('var3とvar4は等しいか',var3==var4);
console.log('var3とvar4は"厳密に"等しいか',var3===var4);

}