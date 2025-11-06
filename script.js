// ===============================
//  家庭用エアコン予約フォーム用JS
//  ・希望日1 / 2 は必須
//  ・希望日3 は任意
//  ・同じ日付を選んだ場合 → エラー表示 & 送信不可
// ===============================

document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("cleaningForm");
  const date1 = document.querySelector('input[name="date1"]');
  const date2 = document.querySelector('input[name="date2"]');
  const date3 = document.querySelector('input[name="date3"]');
  const dateError = document.getElementById("dateError");
  const submitBtn = document.getElementById("submitBtn");

  function validateDates() {
    const v1 = date1.value;
    const v2 = date2.value;
    const v3 = date3.value;

    // 第1・第2が未入力の場合はチェックしない（HTML標準必須チェックに任せる）
    if (!v1 || !v2) return true;

    let hasError = false;

    // 入力欄の赤枠をリセット
    [date1, date2, date3].forEach(el => el.classList.remove("invalid-date"));

    // 同じ日付を選んでいないか確認
    if (v1 === v2) {
      hasError = true;
      date1.classList.add("invalid-date");
      date2.classList.add("invalid-date");
    }
    if (v3 && (v3 === v1 || v3 === v2)) {
      hasError = true;
      date3.classList.add("invalid-date");
    }

    if (hasError) {
      dateError.style.display = "block";
      submitBtn.disabled = true;
    } else {
      dateError.style.display = "none";
      submitBtn.disabled = false;
    }
    return !hasError;
  }

  // 入力変更時にバリデーション実行
  [date1, date2, date3].forEach(input => {
    input.addEventListener("change", validateDates);
  });

  // 送信前最終チェック
  form.addEventListener("submit", (e) => {
    if (!validateDates()) {
      e.preventDefault();
    }
  });

});
