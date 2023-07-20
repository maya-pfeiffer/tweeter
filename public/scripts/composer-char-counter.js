$(".new-tweet textarea").on("input", function() {
  var tweetLength = $(this).val().length;
  var maxChar = 140;
  var remainingChars = maxChar - tweetLength;
  if (remainingChars < 0) {
    // If the remaining characters are negative, display the negative value
    $(".counter").text(remainingChars);
    $(".counter").addClass("negative");
  } else {
    // Otherwise, display the positive remaining characters
    $(".counter").text(remainingChars);
    $(".counter").removeClass("negative");
  }
});