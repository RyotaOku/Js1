/**
  コンテンツのリサイズ
  コンテンツの高さがウィンドウの高さより低い時は、ブラウザの高さと同じにする
 */
window.onload = function( event ){
  const contentWrap = document.getElementById( "content-wrap" );
  const header = document.querySelector( "#wrapper > header" );
  const footer = document.querySelector( "#wrapper > footer" );
  
  let windowHeight = event.currentTarget.innerHeight;
  let headerHeight = header.clientHeight + 2;
  let footerHeight = footer.clientHeight;
  let contentWrapHeight = contentWrap.clientHeight;
  let siteHeight = headerHeight + contentWrapHeight + footerHeight;  

  if( windowHeight > siteHeight ) {
    contentWrap.style.height = ( contentWrapHeight + (windowHeight - siteHeight ) ) + "px";
  }

  const year = document.querySelector( "#year" );
  let date = new Date();
  year.innerText = date.getFullYear();
  
}
