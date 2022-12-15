{
  for(let i = 0; i < 10; i++) {
    // i++はiを1増やす(インクリメント)
    console.log(`${i}回目のループ`);
  }

  let arr = []
  for (let i=0;i<10;i++){
    arr[i] = i
  }
  console.log(arr);

  let arr2 = []
  let j = 0;
  while (j<10) {
    arr2[j] = j
    j++
  }
  console.log(arr2);


  const classes = ["WD1A","WD2A","WD3A"]

  for (let i = 0; i<classes.length;i++){
    console.log(classes[i]);
  }
}