function compute() {
  var pricipal_amount = document.getElementById("principal").value;
  var rate = document.getElementById("rate").value;
  var time = document.getElementById("years").value;
  var output = document.getElementById("s_range");
  output.innerHTML = rate.value;
  rate.oninput = function () {
    output.innerHTML = this.value;
  };

  var simple_interest = (pricipal_amount * rate * time) / 100;
}
