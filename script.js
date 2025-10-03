import { compressJS } from "./compress.js";
let code = document.getElementById("input");
let button1 = document.getElementById("compress");
button1.addEventListener("click", function () {
    code.value = compressJS(code.value);
})
