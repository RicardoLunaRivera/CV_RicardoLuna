var button = document.getElementById("pdfButton");
var makepdf = document.getElementById("generatePDF");
button.addEventListener("click", function () {
  var mywindow = window.open("", "PRINT", "height=600,width=600");
  mywindow.document.write(makepdf.innerHTML);
  mywindow.document.close();
  mywindow.focus();
  mywindow.print();
  return true;
});
