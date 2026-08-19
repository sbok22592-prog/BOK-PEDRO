function requestPlan(planName, price) {

    const username = "PEDRO_DARKk";

    const message =
        "مرحباً PEDRO 👋\n\n" +
        "أريد طلب اشتراك من BOK PEDRO\n\n" +
        "📦 الباقة: " + planName + "\n" +
        "💰 السعر: " + price + "\n\n" +
        "أرغب في معرفة خطوات إتمام الطلب.";

    const telegramURL =
        "https://t.me/" +
        username +
        "?text=" +
        encodeURIComponent(message);

    window.open(telegramURL, "_blank");
}
