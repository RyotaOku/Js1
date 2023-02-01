{
  const figure = document.querySelectorAll(".lazy")
  const img = document.querySelectorAll(".lazy img")

  // for (let i = 0; i < figure.length; i++) {
  //   console.log("こんにちは");
  // }

  // figure.forEach((evt) => {
  //   for (let i = 0; i < img.length; i++) {
  //     let load = null
  //     load = evt.children[i]
  //     // let imgSrc = img[i].getAttribute('src')
  //     // console.log(imgSrc);
  //     img[i].removeAttribute('src')

  //     evt.addEventListener('click', function () {
  //       // console.log("r");
  //       evt.style.backgroundImage = 'url(img/ico_kadai10_001.gif)';
  //       load.addEventListener("load", function () {
  //         console.log("読み込み");
  //       })
  //     })
  //   }
  // })
  for (let i = 0; i < figure.length; i++) {
    let src = img[i].getAttribute('src')
    console.log(src)
    img[i].removeAttribute('src')
    figure[i].addEventListener('click', function () {
      if (img[i].src === '') {
        figure[i].style.backgroundImage = 'url(img/ico_kadai10_001.gif)';
        img[i].setAttribute('src', src)
        img[i].addEventListener('load', function () {
          figure[i].removeAttribute('style')
        })
      }
    })
  }
}