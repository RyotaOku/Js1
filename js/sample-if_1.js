{





  let flg1 = false;

  if (flg1) {
    console.log('trueなら実行される');
  }

  flg1 = true;

  if (flg1) {
    console.log('trueなら実行される');
  }

  const maxCount = 100
  for (let i = 0; i<= maxCount; i++) {
    if (i%2){
      console.log(i + '奇数だよ');
    } else {
      console.log(i + '偶数だぜ');
    }
  }

}