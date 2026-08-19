function requestPlan(plan, price) {

    const username = "PEDRO_DARKk";

    const message =
        "السلام عليكم 👋\n\n" +
        "أريد طلب اشتراك من BOK PEDRO\n\n" +
        "📦 الباقة: " + plan + "\n" +
        "💰 السعر: " + price + "\n\n" +
        "أرجو التواصل معي لإكمال الطلب.";

    const url =
        "https://t.me/" +
        username +
        "?text=" +
        encodeURIComponent(message);

    window.open(url, "_blank");
}
