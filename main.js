document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("a");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            // 如果沒有註冊，攔截所有連結並跳轉註冊頁
            if (!localStorage.getItem("registered")) {
                event.preventDefault();
                window.location.href = "register.html";
            }
            // 已註冊則允許正常跳轉
        });
    });
});
