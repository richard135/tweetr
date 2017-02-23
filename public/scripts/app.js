/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready( function() {
  function renderTweets (tweets){
    for (let tweet of tweets){
      let $input = createTweetElement(tweet);
      $('.existing-tweet').prepend($input);
      // console.log(tweet);
    }
  }
  function getDate(postDate) {
    let now = new Date();
    let dif = now - postDate;
    let day = Math.floor(dif/ (1000 * 60 * 60 * 24));
    return day;
  }

  function organizeTweets(){

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

  //form is the target, submit is the selector
  $('.new-tweet form').on('submit', function (event){
    event.preventDefault();
    var $text = $(this).find('textarea').serialize();
    console.log($text.length);
    if ($text.length - 5 === 0) {
      return alert("Please write something!")
    } else if ($text.length > 145 ){
      return alert("Too many characters!")
    } else {
      $.ajax({
        url: '/tweets',
        method: 'POST',
        data: $text
      }).then(function (data) {
        $('.new-tweet form').find('textarea').val('');
        $('.new-tweet form').find('.counter').text('140');
        //slides form in after posting
        $('.container .new-tweet').slideToggle();
        loadTweets()
      }).catch(function (err) {
      console.log(err);
      alert('ERROR');
    });
    }
  })

  function loadTweets(){
    $.ajax({
      url:'/tweets',
      method:'GET',
    }).then(function(data){
      renderTweets(data);
    }).catch(function (err) {
      console.log(err);
      alert('ERROR');
    });
  }
  loadTweets()

  $('#nav-bar .compose').on('click', function(event){
    $('.container .new-tweet').slideToggle();
    $('.container textarea').focus();
  })


});



