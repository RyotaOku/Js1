{

document.getElementById("box1-bg-btn").onclick = function () {
  let bg = document.getElementById("set-bg-txt");
  console.log(bg.value);
  document.getElementById("box1").style.backgroundColor = bg.value;
};
// ＜ドキュメント内のid名"box1-bg-btn"＞がクリックされたら
// bgに＜ドキュメント内のid名"set-bg-txt"＞を代入。
// コンソールにbgの値を出力。
// ＜ドキュメント内のid名"box1"＞にスタイル「背景色」を適用する。適用する色の値はbgのvalue。

document.getElementById("box2-color-btn").onclick = function () {
  let color = document.getElementById("set-color-txt");
  console.log(color.value);
  document.getElementById("box2-text").style.color = color.value;
};
// ＜ドキュメント内のid名"box2-color-btn"＞がクリックされたら
// colorに＜ドキュメント内のid名"set-color-txt"＞を代入。
// コンソールにcolorの値を出力。
// ＜ドキュメント内のid名"box2"＞にスタイル「文字色」を適用する。適用する色の値はcolorのvalue。

document.getElementById("box3-font-size-btn").onclick = function () {
  let size = document.getElementById("set-font-size-txt");
  console.log(size.value);
  document.getElementById("box3-text").style.fontSize = size.value;
};
// ＜ドキュメント内のid名"box3-font-size-btn"＞がクリックされたら
// sizeに＜ドキュメント内のid名"set-font-size-txt"＞を代入。
// コンソールにsizeの値を出力。
// ＜ドキュメント内のid名"box3"＞にスタイル「背景色」を適用する。適用する色の値はelementのvalue。

document.getElementById("box4-border-btn").onclick = function () {
  let border = document.getElementById("set-border-txt");
  console.log(border.value);
  document.getElementById("box4").style.border = border.value;
};
// ＜ドキュメント内のid名"box1-bg-btn"＞がクリックされたら
// elementに＜ドキュメント内のid名"set-bg-txt"＞を代入。
// コンソールにelementの値を出力。
// ＜ドキュメント内のid名"box1"＞にスタイル「背景色」を適用する。適用する色の値はelementのvalue。

}