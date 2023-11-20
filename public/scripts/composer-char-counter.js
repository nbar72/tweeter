$(document).ready(function() {
  // id of textarea = tweet-text
  $('#tweet-text').on('input', function() {
    
    // retrieve content of string typed into the textarea
    const string = $(this).val();

    // append length of string to counter: 
    $("#counter").text(140 - string.length);

    // change to red 
    if ((140 - string.length) < 0) {
      $('#counter').addClass('red-counter')
    } else {
      $('#counter').removeClass('red-counter')
    }
  }); 
});
