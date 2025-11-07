// =======================================
// SunsCreate - Cleaning Form Validation
// =======================================

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("cleaningForm");

  const date1 = document.querySelector('input[name="date1"]');
  const date2 = document.querySelector('input[name="date2"]');
  const date3 = document.querySelector('input[name="date3"]');

  const dateError = document.getElementById("dateError");

  function checkDateConflict() {
    let d1 = date1.value;
    let d2 = date2.value;
    let d3 = date3.value;

    // リセット
    [date1, date2, date3].forEach(el => el.style.border = "1px solid #bbb");
    dateError.textContent = "";

    if (!d1 || !d2) return; // 必須2つが未入力ならチェックしない

    let conflict = false;

    if (d1 && d2 && d1 === d2) conflict = true;
    if (d1 && d3 && d3 !== "" && d1 === d3) conflict = true;
    if (d2 && d3 && d3 !== "" && d2 === d3) conflict = true;

    if (conflict) {
      dateError.textContent = "※ 希望日はすべて別日をご選択ください";
      [date1, date2, date3].forEach(el => {
        if (el.value !== "") el.style.border = "2px solid red";
      });
      return false;
    }
    return true;
  }

  // 入力のたびに監視
  [date1, date2, date3].forEach(el => {
    el.addEventListener("change", checkDateConflict);
  });

  // 送信前チェック
  form.addEventListener("submit", (e) => {
    if (!checkDateConflict()) {
      e.preventDefault();
      alert("入力内容に不備があります。修正してから送信してください。");
    }
  });
});
