{
let btn = document.getElementById("set")

// todoリストの作成
let todoList = []
// todoリストのカウント
let index = 0

btn.onclick = function (event) {
todoList[index] = "テキストボックスの入力内容"
// ＋１ずつ増やす、「インクリメント」
index = index+1
// 省略できる書き方
// index +=1
// index ++
// がある
}
}