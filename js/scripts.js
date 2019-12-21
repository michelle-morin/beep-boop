// Back-end logic: none.

// User interface logic:
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $(".output").addClass("card border-secondary").show();

    var inputNumber = parseInt($("input#number").val());

    var userName = $("input#name").val();
      if (userName) {
        userName = userName;
      } else {
        userName = "Dave";
      }
    console.log(userName);

    if (isNaN(inputNumber) === true) {
      $("ul#result").text("Please enter a number.")
    }

    var listOfNumbers = [];
      for (var i = 0; i <= inputNumber; i ++) {
        listOfNumbers.push(i);
      }

    for (var i = 0; i <= inputNumber; i++) {
      if (i.toString().includes("3")) {
        listOfNumbers[i] = "I'm sorry, " + userName + ". I can't do that.";
      } else if (i.toString().includes("2")) {
        listOfNumbers[i] = "Boop!";
      } else if (i.toString().includes("1")) {
        listOfNumbers[i] = "Beep!";
      }
    }

    $("ul#result").empty();
    $(".inputnumber").text(inputNumber)

    listOfNumbers.forEach(function(element) {
      $("ul#result").append("<li>" + element + "</li>");
    })
  });
});
