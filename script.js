function compute() {
  var pricipal_amount = document.getElementById("principal").value;
  var rate = document.getElementById("rate").value;
  var time = document.getElementById("years").value;
  var range_val = document.getElementById("s_range");
  range_val.innerHTML = rate.value;

  var simple_interest = (pricipal_amount * rate * time) / 100;
}
