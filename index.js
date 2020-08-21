const convertButton = document.getElementById("convertButton");

convertButton.addEventListener("click", function () {
  let fahrenheit = document.getElementById("fahrenheit").value;
  fahrenheit = parseInt(fahrenheit);
  document.getElementById("celsius").value = (
    (fahrenheit - 32) *
    (5 / 9)
  ).toFixed(2);
});
