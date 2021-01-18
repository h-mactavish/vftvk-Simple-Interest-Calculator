function compute() {
  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;
  var output = document.getElementById("s_range");
  output.innerHTML = rate.value;
  //console.log(typeof pricipal_amount);
  (function () {
    if (pricipal_amount <= 0) {
      alert("Enter a positive number");
      return false;
    }
  })();
  var interest = (pricipal_amount * rate * years) / 100;
  var date = new Date();
  var curr_year = date.getFullYear();

  var year_Int = curr_year + parseInt(years, 10);

  var result =
    "If you deposit <mark>" +
    pricipal_amount +
    "</mark>, at an interest rate of <mark>" +
    rate +
    "</mark>. You will receive an amount of <mark>" +
    interest +
    "</mark>, in the year " +
    year_Int;
  document.getElementById("result").innerHTML = result;
  showVal(rate);
}
function showVal(newVal) {
  document.getElementById("s_range").innerHTML = newVal;
}
