{
  const timerButton = document.getElementById('start_timer')


  let intervalCount = 0;

  const delay = 1000;

  timerButton.addEventListener('click', function () {
    console.log(`${intervalCount}秒`);

    setInterval(function () {
      intervalCount++;
      console.log(`${intervalCount}秒経過`);
    }, delay);
  })
}
let price = 300;
let ticket = 1;

function discount() {
  if (ticket) {
    price /= 2
  }
  console.log(price);
}