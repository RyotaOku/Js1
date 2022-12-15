{

  const c = document.getElementById("content").getElementsByClassName("blank")
  console.log(c);
  for (let i = 0; i < c.length; i++) {
    c[i].onclick = (e) => {
      e.preventDefault();
      open(e.currentTarget.href, 'kadai04');
    }
  }

}