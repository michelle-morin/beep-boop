// Back-end logic: none.


// User interface logic:
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $(".output").show();

    var inputNumber = $("input#number").val();
    console.log(inputNumber);

    var listOfNumbers = [];
      for (var i = 0; i <= parseInt(inputNumber); i ++) {
        listOfNumbers.push(i);
      }
    console.log(listOfNumbers);

    listOfNumbers.toString().forEach(function(number) {
      if (number.indexOf('3') > -1) {
        number = "I'm sorry, Dave. I can't do that.";
      } else if (number.indexOf('2') > -1) {
        number = "Boop!";
      } else if (number.indexOf('1') > -1) {
        number = "Beep!";
      }
    });


    listOfNumbers.forEach(function(element) {
      $("ul#result").append("<li>" + element + "</li>");
    })
  });
});
