/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready( function() {

// Test / driver code (temporary). Eventually will get this from the server.
var data = [
  {
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
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];


  function renderTweets (tweets){
    for (let tweet of tweets){
      let $input = createTweetElement(tweet);
      $('.existing-tweet').append($input);
      console.log(tweet);
    }
  }
  function getDate(postDate) {
    let now = new Date();
    let dif = now - postDate;
    let day = Math.floor(dif/ (1000 * 60 * 60 * 24));
    return day;
  }

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
    const $date = getDate(data.created_at);
    const $footer = $("<footer>").text($date+" days ago");
    $footer.append($flag, $loop, $heart);
    $tweet.append($footer);
    return $tweet
  }


  renderTweets(data);

});



