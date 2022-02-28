$(function () { objectFitImages() });



window.onload = () => {
document.getElementById("search-addon").submit();

}

window.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("searchform");

  document.getElementById("search-addon").addEventListener("click", function () {
  form.submit();
});
});
