document.addEventListener("DOMContentLoaded", ()=>{
    const body = document.querySelector("body");
    body.addEventListener("click", function(event) {
        let target = event.target;
        if (target.classList.contains("alert__close") == true) {
            target.closest(".alert__item").remove();
            if (!body.querySelector(".alert__item")) body.querySelector(".alert__wrapper").remove();
        } else return;
    });
});

//# sourceMappingURL=index.44983732.js.map
