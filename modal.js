// =======================================
// SunsCreate - Area Modal Script
// =======================================

document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("open-area");
  const modalBg = document.createElement("div");
  modalBg.classList.add("modal-bg");

  modalBg.innerHTML = `
    <div class="modal-box">
      <h3>家庭用エアコン洗浄 対応エリア</h3>
      <p>
      <strong>東京都</strong><br>
      足立区 / 荒川区 / 板橋区 / 稲城市 / 江戸川区 / 大田区 / 葛飾区 / 北区 / 江東区 / 小金井市 / 小平市 / 狛江市 / 品川区 / 渋谷区 / 新宿区 / 杉並区 / 墨田区 / 世田谷区 / 台東区 / 多摩市 / 中央区 / 調布市 / 千代田区 / 豊島区 / 中野区 / 西東京市 / 練馬区 / 東久留米市 / 日野市 / 府中市 / 文京区 / 町田市 / 三鷹市 / 港区 / 武蔵野市 / 目黒区
      <br><br>
      <strong>神奈川県</strong><br>
      厚木市 / 綾瀬市 / 伊勢原市 / 川崎市麻生区 / 川崎市川崎区 / 川崎市幸区 / 川崎市高津区 / 川崎市多摩区 / 川崎市中原区 / 川崎市宮前区 / 相模原市中央区 / 相模原市南区 / 座間市 / 秦野市 / 大和市 / 横浜市青葉区 / 横浜市旭区 / 横浜市泉区 / 横浜市磯子区 / 横浜市神奈川区 / 横浜市金沢区 / 横浜市港南区 / 横浜市港北区 / 横浜市栄区 / 横浜市瀬谷区 / 横浜市都筑区 / 横浜市鶴見区 / 横浜市戸塚区 / 横浜市中区 / 横浜市西区 / 横浜市保土ケ谷区 / 横浜市緑区 / 横浜市南区
      </p>

      <a href="#" class="modal-close">閉じる</a>
    </div>
  `;

  document.body.appendChild(modalBg);

  // 開く
  openBtn.addEventListener("click", (e) => {
    e.preventDefault();
    modalBg.style.display = "flex";
  });

  // 閉じる
  modalBg.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal-bg") || e.target.classList.contains("modal-close")) {
      modalBg.style.display = "none";
    }
  });
});
