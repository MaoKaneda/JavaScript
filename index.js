// プルダウンメニューの機能を実装する関数
function pullDown() {
  // DOM要素の取得
  const pullDownButton = document.getElementById("lists")        // プルダウンボタン
  const pullDownParents = document.getElementById("pull-down")   // プルダウンメニューの親要素
  const pullDownChild = document.querySelectorAll(".pull-down-list")  // プルダウンリストの子要素
  const currentList = document.getElementById("current-list")    // 現在選択中のリスト表示要素

  // マウスオーバー時の処理
  pullDownButton.addEventListener('mouseover', function(){
    this.setAttribute("style", "background-color:#FFBEDA;")  // 背景色をピンクに変更
  })

  // マウスアウト時の処理
  pullDownButton.addEventListener('mouseout', function(){
    this.removeAttribute("style")  // スタイルをリセット
  })

  // クリック時の処理
  pullDownButton.addEventListener('click', function() {
    if (pullDownParents.getAttribute("style") == "display:block;") {
      pullDownParents.removeAttribute("style")  // メニューを非表示
    } else {
      pullDownParents.setAttribute("style", "display:block;")  // メニューを表示
    }
  })

  // プルダウンリストの各項目にクリックイベントを追加
  pullDownChild.forEach(function(list) {
    list.addEventListener('click', function() {
      const value = list.innerHTML  // 選択された項目のテキストを取得
      currentList.innerHTML = value  // 現在のリスト表示を更新
    })
  })
}

// ページ読み込み完了時にプルダウンメニュー機能を初期化
window.addEventListener('load', pullDown)