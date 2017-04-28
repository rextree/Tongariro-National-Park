//display date in weather panel
var d = new Date();

var day = d.getDate();
var month = d.getMonth() + 1;
var year = d.getFullYear();

var date = document.getElementById("date");
date.innerHTML = day + "/" + "0" + month + "/" + year;
