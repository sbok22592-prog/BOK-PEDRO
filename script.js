/* ================= SPLASH ================= */

window.addEventListener("load", function () {

    setTimeout(function () {

        const splash = document.getElementById("splash");

        if (splash) {

            splash.style.opacity = "0";

            setTimeout(function () {

                splash.style.display = "none";

            }, 600);

        }

    }, 2200);

});



/* ================= طلب الاشتراك ================= */

function requestPlan(plan, price) {

    showTelegramChoice(plan, price);

}



/* ================= اختيار Telegram ================= */

function showTelegramChoice(plan, price) {

    closeTelegramChoice();

    const overlay = document.createElement("div");

    overlay.className = "telegram-overlay";

    overlay.id = "telegramOverlay";

    overlay.innerHTML = `

        <div class="telegram-modal">

            <div class="telegram-modal-icon">

                <i class="fa-brands fa-telegram"></i>

            </div>


            <h3>
                اختر حساب Telegram
            </h3>


            <p>
                أين تريد إرسال طلب الاشتراك؟
            </p>


            <button
                class="telegram-option"
                onclick="openTelegram('${escapeText(plan)}','${escapeText(price)}','PEDRO_DARKk')">

                <i class="fa-brands fa-telegram"></i>

                @PEDRO_DARKk

            </button>


            <button
                class="telegram-option"
                onclick="openTelegram('${escapeText(plan)}','${escapeText(price)}','Moser_Bok1')">

                <i class="fa-brands fa-telegram"></i>

                @Moser_Bok1

            </button>


            <button
                class="telegram-cancel"
                onclick="closeTelegramChoice()">

                إلغاء

            </button>

        </div>

    `;

    document.body.appendChild(overlay);

}



/* ================= فتح Telegram ================= */

function openTelegram(plan, price, username) {

    const message =
        "مرحباً BOK PEDRO\n\n" +
        "أريد الاشتراك في: " + plan + "\n" +
        "السعر: " + price;

    const telegramURL =
        "https://t.me/" +
        username +
        "?text=" +
        encodeURIComponent(message);

    window.open(telegramURL, "_blank");

    closeTelegramChoice();

}



/* ================= إغلاق النافذة ================= */

function closeTelegramChoice() {

    const oldOverlay =
        document.getElementById("telegramOverlay");

    if (oldOverlay) {

        oldOverlay.remove();

    }

}



/* ================= فتح اختيار Telegram بدون باقة ================= */

function openTelegramChoice() {

    showTelegramChoice(
        "طلب فتح حساب",
        "سيتم التواصل لتحديد التفاصيل"
    );

}



/* ================= حماية النص داخل HTML ================= */

function escapeText(text) {

    return String(text)
        .replace(/\\/g, "\\\\")
        .replace(/'/g, "\\'")
        .replace(/"/g, '\\"')
        .replace(/\n/g, "\\n")
        .replace(/\r/g, "\\r");

}
