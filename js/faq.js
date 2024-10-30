//FAQ

var perguntasFrequentes = document.getElementById("perguntasFrequentes");
var perguntasFrequentesDialog = document.getElementById(
  "perguntasFrequentesDialog",
);
perguntasFrequentes.addEventListener("click", () => {
  perguntasFrequentesDialog.style.display = "block";
  duvidasDialog.style.display = "none";
  tutoriaisDialog.style.display = "none";
});
///////////////////////////
var pesquiseSuaDuvida = document.getElementById("pesquiseSuaDuvida");
var duvidasDialog = document.getElementById("duvidasDialog");
pesquiseSuaDuvida.addEventListener("click", () => {
  perguntasFrequentesDialog.style.display = "none";
  duvidasDialog.style.display = "block";
  tutoriaisDialog.style.display = "none";
});
///////////////////////////
var tutoriaisULIFE = document.getElementById("tutoriaisUlife");
var tutoriaisDialog = document.getElementById("tutoriaisDialog");
tutoriaisULIFE.addEventListener("click", () => {
  perguntasFrequentesDialog.style.display = "none";
  duvidasDialog.style.display = "none";
  tutoriaisDialog.style.display = "block";
});
///////////////////
////btn1
var btn1 = document.getElementById("btn1");
var text1 = document.getElementById("txt1");
btn1.addEventListener("click", function () {
  if (text1.style.display === "none") {
    text1.style.display = "block";
  } else {
    text1.style.display = "none";
  }
});
////btn2
var btn2 = document.getElementById("btn2");
var txt2 = document.getElementById("txt2");
btn2.addEventListener("click", function () {
  if (txt2.style.display === "none") {
    txt2.style.display = "block";
  } else {
    txt2.style.display = "none";
  }
});
////btn3
var btn3 = document.getElementById("btn3");
var txt3 = document.getElementById("txt3");
btn3.addEventListener("click", function () {
  if (txt3.style.display === "none") {
    txt3.style.display = "block";
  } else {
    txt3.style.display = "none";
  }
});
////btn4
var btn4 = document.getElementById("btn4");
var txt4 = document.getElementById("txt4");
btn4.addEventListener("click", function () {
  if (txt4.style.display === "none") {
    txt4.style.display = "block";
  } else {
    txt4.style.display = "none";
  }
});