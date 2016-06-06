$(document).ready(function(event){
  var words = [];
  var longwords = [];

  $('#blanks').submit(function(event) {
    var userInput = $('#sentence').val();
    words = userInput.split(" ");

    words.forEach(function(word) {
      if ( word.length >= 3 ) {
        longwords.push(word);
      }
    });

    longwords = longwords.reverse();
    longwords = longwords.toString();

    event.preventDefault();
    $(".sentence").text(longwords);
    $('#results').show();
    $('#blanks').hide();

  });
});
