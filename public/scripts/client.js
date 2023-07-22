const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
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
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

const createTweetElement = function(tweet) {
  const $tweet = $('<article>').addClass('tweet-box');

  const $header = $('<header>');
  const $userInfo = $('<div>').addClass('user-info');
  const $avatar = $('<img>').attr('src', tweet.avatar).addClass('avatar');
  const $name = $('<span>').addClass('name').text(tweet.name);

  $userInfo.append($avatar, $name);
  $header.append($userInfo);
  
  const $handle = $('<div>').addClass('handle').text('@' + tweet.handle);

  $header.append($handle);

  const $content = $('<section>').addClass('tweet-middle');
  const $tweetText = $('<p>').addClass('tweet-text').text(tweet.text);

  $content.append($tweetText);

  const $footer = $('<footer>');
  const $date = $('<div>').addClass('date').text(tweet.date);
  const $icons = $('<div>').addClass('icons');
  const $flagIcon = $('<i>').addClass('fa-solid fa-flag');
  const $retweetIcon = $('<i>').addClass('fa-solid fa-retweet');
  const $likeIcon = $('<i>').addClass('fa-solid fa-heart');

  $icons.append($flagIcon, $retweetIcon, $likeIcon);
  $footer.append($date, $icons);
  $tweet.append($header, $content, $footer);

  const $tweetContainer = $('<section>').addClass('tweet-container');
  
  $tweetContainer.append($tweet);

  return $tweetContainer;
}

const renderTweets = function(tweets) {
  $('#tweets-container').empty();
  for (const tweet of tweets) {
    const $tweetElement = createTweetElement(tweet);
    $('#tweets-container').append($tweetElement);
  }
}

renderTweets(data);
