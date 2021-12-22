let sleepResult = document.getElementById("sleep-result");

function sleepNow() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    // 5 cycles
    date.setMinutes(minutes + 450)
    let idealHours = 0;
    let idealMinutes = 0;
    sleepResult.innerHTML = "Bây giờ là " + hours + ":" + minutes + " " +
        " bạn nên <div class=\"time-result\">đặt báo thức của bạn lúc " + ('0' + date.getHours()).slice(-2) + ":" + ('0' + date.getMinutes()).slice(-2) + "</div>" +
        "để hoàn thành năm chu kỳ ngủ kéo dài 90 phút.";
}