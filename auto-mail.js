// ====== Formspree送信＋送信後リダイレクト処理 ======
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("cleaningForm");

    form.addEventListener("submit", async function (e) {
        e.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // <<<<<< ここをあなたのFormspree IDに置き換え >>>>>>
        const formspreeEndpoint = "https://formspree.io/f/xdkpdedo";

        try {
            const response = await fetch(formspreeEndpoint, {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                },
                body: formData
            });

            if (response.ok) {
                window.location.href = "thanks.html"; // ✅ 送信完了ページへ移動
            } else {
                alert("送信中にエラーが発生しました。別の方法でお問い合わせください。");
            }
        } catch (error) {
            alert("通信エラーが発生しました。時間を置いて再度お試しください。");
        }
    });
});
