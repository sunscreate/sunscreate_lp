// ================================
//  SunsCreate - Price Calculator
// ================================

document.addEventListener("DOMContentLoaded", () => {
  const selects = document.querySelectorAll(".unit");
  const totalBox = document.getElementById("totalPrice");

  function calculateTotal() {
    let total = 0;
    selects.forEach(select => {
      const qty = parseInt(select.value);
      const price = parseInt(select.dataset.price);
      total += qty * price;
    });

    totalBox.textContent = `合計：${total.toLocaleString()}円`;
  }

  // 初期表示
  calculateTotal();

  // 変更されるたびに再計算
  selects.forEach(select => {
    select.addEventListener("change", calculateTotal);
  });
});
