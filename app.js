const btn = document.getElementById("btn");
let body = document.querySelector("body");
let mode = "light";
btn.addEventListener("click", () => {
    if (mode === "light") {
        body.style.backgroundColor = "black";
        document.querySelector("p").style.color = "white";
        mode = "dark";
    }
    else {
        body.style.backgroundColor = "White";
        document.querySelector("p").style.color = "black";
        mode = "light";
    }
})