var inf = document.querySelector(".inf");
var fundo = document.querySelector(".fundo");
var btnLocal = document.querySelector(".btn-local");

btnLocal.addEventListener("click", function(){
    fundo.style.display = "";
    setTimeout(function(){
        inf.style.left = "0%"
    }, 100);
});