// ==============================
// 料金計算スクリプト
// ==============================

document.addEventListener("DOMContentLoaded", function () {

  // 単価設定（変更する場合ここだけ修正でOK）
  const priceMap = {
    "wall": 14000,
    "ceiling": 27000,
    "clean": 6000,
    "outdoor": 5000
  };

  const inputs = document.querySelectorAll(".calc-input");
  const totalDisplay = document.getElementById("total-price");
  const hiddenField = document.getElementById("hidden-total");

  function calcPrice() {
    let total = 0;

    inputs.forEach(input => {
      const qty = parseInt(input.value) || 0;
      const type = input.dataset.type;
      total += (priceMap[type] * qty);
    });

    // 画面に反映（カンマ付き表示）
    totalDisplay.textContent = total.toLocaleString();

    // hiddenへリアルタイム反映（メールに金額を送れる）
    hiddenField.value = total;
  }

  // 入力のたびに合計自動更新
  inputs.forEach(input => input.addEventListener("input", calcPrice));

  // ページ読み込み時に初期計算
  calcPrice();
});
