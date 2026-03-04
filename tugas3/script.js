const inputBgColor = document.getElementById("bgColor");
const inputTxtColor = document.getElementById("txtColor");
const tombolSimpan = document.getElementById("btnSimpan");

tombolSimpan.addEventListener("click", function () {
  const warnaLatarBaru = inputBgColor.value;
  const warnaTeksBaru = inputTxtColor.value;

  document.body.style.backgroundColor = warnaLatarBaru;
  document.body.style.color = warnaTeksBaru;
});
