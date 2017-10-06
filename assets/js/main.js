var bRadius = document.querySelector(".b-radius");
var bColor = document.querySelector(".b-color");
var block = document.querySelector(".block");
var vRadius;


var btnSection = document.querySelector(".btn-section");

var btnClearLocal = document.querySelector(".btnClearLocal");
var btnClearSession = document.querySelector(".btnClearSession");

var tbody = document.querySelector(".tbody");

bRadius.addEventListener("input", function () {
    localStorage.setItem('b-radius', bRadius.value);
    vRadius = localStorage.getItem('b-radius');
    block.style.borderRadius = vRadius + "%";

    if (vRadius == '') {
        block.style.borderRadius = "0%";
    }
});

bColor.addEventListener("change", function () {
    localStorage.setItem('color', bColor.value);
    var x = localStorage.getItem('color');

    block.style.backgroundColor = x;
});


btnClearLocal.addEventListener("click", function(){
    localStorage.clear();
});
btnClearSession.addEventListener("click", function(){
    sessionStorage.clear();
});

var x = localStorage.getItem('color');
block.style.backgroundColor = x;

vRadius = localStorage.getItem('b-radius');
block.style.borderRadius = vRadius + "%";

for(var i=0; i< localStorage.length; i++){
    var x, k;
    k = localStorage.key(i);
    console.log(localStorage.key(i));
    x = localStorage.getItem(k);

    console.log(x);
    crElements(k, x);
}

function crElements(element01, element02){
    var elementTr = document.createElement('TR');
    var element1Td = document.createElement('TD');
    var element2Td = document.createElement('TD');

    element1Td.appendChild(document.createTextNode(element01));
    element2Td.appendChild(document.createTextNode(element02));
    elementTr.appendChild(element1Td);
    elementTr.appendChild(element2Td);
    
    tbody.appendChild(elementTr);
}