/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready( function() {
  const createTweetElement = function(tweet) {
    const $newTweet = 
      $(`<article class="tweet">
          <header>
            <div> <img src="${tweet.user.avatars}" alt="My Profile Picture"> </div>
            <div> ${tweet.user.name} </div>
            <div> ${tweet.user.handle} </div>
          </header>
          <div class="tweet-text">
            ${$('<div>').text(tweet.content.text).html()}
          </div>
          <footer>
            <div> ${timeago.format(tweet.created_at)} </div>
            <div class="symbols">
              <div><i class="fa-solid fa-flag"></i></div>
              <div><i class="fa-solid fa-retweet"></i></div>
              <div></i><i class="fa-solid fa-heart"></i></div>
            </div>
          </footer>
      </article>`);

    return $newTweet;
  };

  const renderTweets = function(tweets) {
    for (const tweet of tweets) {
      const newTweet = createTweetElement(tweet);
      $('#tweets-container').append(newTweet);
    }
  };

  // Use ajax GET request to retrieve data from server
  const loadTweets = function () {
    $.ajax({
      type: "GET",
      url: "/tweets/",
      success: (tweets) => {
        $('#tweets-container').empty(); // Clear existing content
        renderTweets(tweets.reverse());
      }
    })
  };
  loadTweets();
  
  // Use ajax POST request to send serialized data to server (server is configured to receive data in query string)
  $('.new-tweet form').on('submit', function(event) {
    event.preventDefault();
    
    const input = $('#tweet-text').val();
    if (input.length > 140) {
      return alert("Tweet is too long");
    }
    if (input.length === 0 ) {
      return alert("Tweet cannot be blank");
    }

    const formData = $('.new-tweet form').serialize();
    $.ajax({
    type: "POST",
    url: '/tweets/',
    data: formData,
    success: () => {
      // reset text area and counter
      $('#tweet-text').val('');
      $('#counter').text(140);

      loadTweets();
      }
    });
  })
});

