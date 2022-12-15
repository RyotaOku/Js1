{
  const imgs = document.querySelectorAll('.item img');
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].onmouseover = (evt) => {
      if (!evt.currentTarget.classList.contains('over')) {
        evt.currentTarget.classList.add('over');
      }
    };
    imgs[i].onmouseout = (evt) => {
      if (evt.currentTarget.classList.contains('over')) {
        evt.currentTarget.classList.remove('over');
      }
    };
  }
}