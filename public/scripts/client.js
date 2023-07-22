// Render Tweet HTML dynamically
const createTweetElement = function(tweet) {
  return `<article class="tweet-box">
    <header>
      <div class="user-info">
      <img src=${tweet.user.avatars} alt="Avatar" class="avatar">
        <span class="name">${tweet.user.name}</span>
      </div>
      <div class="handle">${tweet.user.handle}</div>
    </header>
    <section class="tweet-middle">
      <p class="tweet-text">${tweet.content.text}</p>
    </section>
    <footer>
      <div class="date">${timeago.format(tweet.created_at)}</div>
      <div class="icons">
      <i class="fa-solid fa-flag"></i>
      <i class="fa-solid fa-retweet"></i>
      <i class="fa-solid fa-heart"></i>
    </div>
    </footer>
  </article>`
}

// Render Tweet Feed
const renderTweets = function(tweets) {
  $('#tweets-container').empty();
  for (const tweet of tweets) {
    const $tweetElement = createTweetElement(tweet);
    $('#tweets-container').prepend($tweetElement);
  }
}

//GET and render tweets from in-memory database
const loadTweets = function() {
  $.ajax("http://localhost:8080/tweets", {
    method: "GET",
    dataType: "json",
    success: function(tweets) {
    renderTweets(tweets);
    }
  })
};

$(document).ready(function() {
  //submit new tweet
  $("form").submit(function(event) {
    event.preventDefault();
    let $newTweet = $(this).serialize();
    let $tweetLength = $(this).find("textarea[name='text']").val().trim().length;
    //Confirm tweet length and return alerts if necessary
    if ($newTweet === 'text=' || $newTweet === null || $tweetLength > 140) {
      if ($tweetLength > 140) {
        alert('Tweets over 140 characters are not allowed!');
      } else if ($tweetLength === 0) {
        alert('Empty tweets are not allowed!');
      }
    } else {
    $.ajax("/tweets", {
      method: "POST",
      data: $newTweet,
      success: function() {
        loadTweets()
      }
      })
  }
  })
  loadTweets();
})
