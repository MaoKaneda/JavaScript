/**
 * プルダウンメニューの機能を実装する関数
 * マウスオーバー、クリック、リスト選択などのイベント処理を含む
 */
function pullDown() {
  // === DOM要素の取得 ===
  const pullDownButton = document.getElementById("lists")        // プルダウンボタン要素
  const pullDownParents = document.getElementById("pull-down")   // プルダウンメニューのコンテナ要素
  const pullDownChild = document.querySelectorAll(".pull-down-list")  // プルダウンリストの各項目要素
  const currentList = document.getElementById("current-list")    // 現在選択中のリストを表示する要素

  // === マウスオーバーイベント ===
  // ボタンにマウスが重なった時の処理
  pullDownButton.addEventListener('mouseover', function(){
    this.setAttribute("style", "background-color:#FFBEDA;")  // 背景色をピンク色（#FFBEDA）に変更
  })

  // === マウスアウトイベント ===
  // ボタンからマウスが離れた時の処理
  pullDownButton.addEventListener('mouseout', function(){
    this.removeAttribute("style")  // 追加したスタイルを削除して元の状態に戻す
  })

  // === クリックイベント ===
  // ボタンがクリックされた時の処理
  pullDownButton.addEventListener('click', function() {
    // メニューの表示状態を確認し、表示/非表示を切り替える
    if (pullDownParents.getAttribute("style") == "display:block;") {
      pullDownParents.removeAttribute("style")  // メニューを非表示にする
    } else {
      pullDownParents.setAttribute("style", "display:block;")  // メニューを表示する
    }
  })

  // === リスト項目のクリックイベント ===
  // 各リスト項目にクリックイベントを追加
  pullDownChild.forEach(function(list) {
    list.addEventListener('click', function() {
      const value = list.innerHTML  // クリックされた項目のテキストを取得
      currentList.innerHTML = value  // 現在のリスト表示を選択された項目で更新
    })
  })
}

// === 初期化処理 ===
// ページの読み込みが完了した時点でプルダウンメニュー機能を初期化
window.addEventListener('load', pullDown)