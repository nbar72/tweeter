$(document).ready(function() {
  // id of textarea = tweet-text
  $('#tweet-text').on('input', function() {
    
    // retrieve content of string typed into the textarea
    const string = $(this).val();

    // append length of string to counter: 
    let counter = $(".counter").text(140 - string.length);
    
  }); 
});
