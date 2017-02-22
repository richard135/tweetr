/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready( function() {
  function createTweetElement (data) {
    const $tweet = $("<article>").addClass("tweet");
    const $header = $("<header>").appendTo($tweet);
    const $name = $("<span>").addClass("name").text(data.user.name);
    const $profilepic = $("<img>").addClass("profilepic").attr("src", data.user.avatars.small);
    const $username = $ ("<span>").addClass("username").text(data.user.handle);
    $header.append($name, $profilepic, $username);

    const $paragraph = $("<p>").text(data.content.text);
    $tweet.append($paragraph);

    const $flag = $("<img>").addClass("footer_logo").attr("src", "/images/flag.png");
    const $loop = $("<img>").addClass("footer_logo").attr("src", "/images/loop.png");
    const $heart = $("<img>").addClass("footer_logo").attr("src", "/images/heart.png");
    const $footer = $("<footer>").text(data.created_at);
    $footer.append($flag, $loop, $heart);
    $tweet.append($footer);
    return $tweet
  }

  function renderTweets ()

// Test / driver code (temporary). Eventually will get this from the server.
var tweetData = {
  "user": {
    "name": "Newton",
    "avatars": {
      "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}

var $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('.existing-tweet').append($tweet);

});

