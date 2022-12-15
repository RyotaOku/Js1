{


  let titleEle = document.getElementById('title')

  titleEle.addEventListener('click', function (event) {
    // titleEle.classList.toggle('active')

    // クラス名を変数化すればもっとスマート
    // let className = 'active';
    if (event.target.classList.contains('active')){
      console.log('持ってるよ');
      titleEle.classList.remove('active')
    } else {
      console.log('持ってないよ');
      titleEle.classList.add('active')
    }
  })


}