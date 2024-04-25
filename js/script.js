document.getElementById("PengukuranSuhu").addEventListener("submit", function(e) {
  e.preventDefault();

  var SuhuInput = document.getElementById("SuhuInput").value;
  var JenisSuhu = document.getElementById("JenisSuhu").value;
  var HasilKonversi = document.getElementById("HasilKonversi");

  if (isNaN(SuhuInput)) {
    HasilKonversi.innerText = "Please enter a valid number";
    return;
  }

  if (JenisSuhu === "celsius") {
    var SuhuDikonversi = (SuhuInput * 9 / 5) + 32;
    HasilKonversi.innerText = SuhuInput + "°C (Celsius) Sama Dengan " + SuhuDikonversi + "°F (Fahrenheit)";
  } else if (JenisSuhu === "fahrenheit") {
    var SuhuDikonversi = (SuhuInput - 32) * 5 / 9;
    HasilKonversi.innerText = SuhuInput + "°F (Fahrenheit) Sama Dengan " + SuhuDikonversi + "°C (Celsius)";
  }
});