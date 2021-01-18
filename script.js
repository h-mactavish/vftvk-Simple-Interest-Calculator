//Submit button fucntionality
function compute() {
  var pricipal_amount = parseInt(
    document.getElementById("principal").value,
    10
  ); //Converting principal amount to int for validation
  //parsing of HTML Input tag
  var rate = document.getElementById("rate").value; //type string
  var years = document.getElementById("years").value; //type string
  var output = document.getElementById("s_range"); //Variable for setting span to dynamically change of rate value
  //console.log(typeof rate);
  //console.log(typeof years);
  output.innerHTML = rate.value;

  //Self-Invoking function for principal validation
  (function () {
    if (pricipal_amount <= 0) {
      alert("Enter a positive number");
      document.getElementById("principal").focus(); //returns cursor to field
      exit(); //To stop further script execution
    }
  })();
  var interest = (pricipal_amount * rate * years) / 100;
  var date = new Date(); //date variable for getting current date
  var curr_year = date.getFullYear(); //For getting current year

  var year_Int = curr_year + parseInt(years, 10); //

  //Calculates the final String that is to be printed/appended in th span result tag
  var result =
    "If you deposit <mark>" +
    pricipal_amount +
    "</mark>,<br>at an interest rate of <mark>" +
    rate +
    "</mark>.<br> You will receive an amount of <mark>" +
    interest +
    "</mark>,<br> in the year " +
    year_Int;
  if (pricipal_amount) document.getElementById("result").innerHTML = result;
  showVal(rate); //Fucntion call to help rate retain its value after submit call and dynamic updating of rate
}

//Function for dynamically updating and printing input's value
function showVal(newVal) {
  document.getElementById("s_range").innerHTML = newVal;
}
