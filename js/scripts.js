// Back-end logic: none.

// User interface logic:
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $(".output").addClass("card").show();

    var inputNumber = parseInt($("input#number").val());

    if (isNaN(inputNumber) === true) {
      $("ul#result").text("Please enter a number.")
    }

    var listOfNumbers = [];
      for (var i = 0; i <= inputNumber; i ++) {
        listOfNumbers.push(i);
      }

    for (var i = 0; i <= inputNumber; i++) {
      if (i.toString().includes("3")) {
        listOfNumbers[i] = "I'm sorry, Dave. I can't do that.";
      } else if (i.toString().includes("2")) {
        listOfNumbers[i] = "Boop!";
      } else if (i.toString().includes("1")) {
        listOfNumbers[i] = "Beep!";
      }
    }

    listOfNumbers.forEach(function(element) {
      $("ul#result").append("<li>" + element + "</li>");
    })
  });
});
