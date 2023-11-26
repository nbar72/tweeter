/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

function createTweetElement(data) {
  const newTweet = 
    `<article class="tweet">
        <header>
          <div> <img src="${data.user.avatars}" alt="My Profile Picture"> </div>
          <div> ${data.user.name} </div>
          <div> ${data.user.handle} </div>
        </header>
        <div class="tweet-text">
          ${data.content.text}
        </div>
        <footer>
          <div> ${data.created_at} </div>
          <div class="symbols">
            <div><i class="fa-solid fa-flag"></i></div>
            <div><i class="fa-solid fa-retweet"></i></div>
            <div></i><i class="fa-solid fa-heart"></i></div>
          </div>
        </footer>
    </article>`;
  return newTweet;
};

const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}

$(document).ready( function() {
  const $tweet = createTweetElement(tweetData);
  console.log($tweet); // test: to see what it looks like
  $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
});