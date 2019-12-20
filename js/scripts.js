// Back-end logic: none.


// User interface logic:
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $(".output").show();

    var inputNumber = $("input#number").val();
    console.log(inputNumber);

    var listOfNumbers = [];
      for (var i = 0; i <= inputNumber; i ++) {
        listOfNumbers.push(i);
        console.log(listOfNumbers);
      }

    $("ul#result").append("<li>" +  + "</li>")  // add numbers

  });
});
