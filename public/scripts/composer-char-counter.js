$(".new-tweet textarea").on("input", function() {
  var tweetLength = $(this).val().length;
  var maxChar = 140;
  var remainingChars = maxChar - tweetLength;
  if (remainingChars < 0) {
    $(".counter").text(remainingChars);
    $(".counter").addClass("negative");
  } else {
    $(".counter").text(remainingChars);
    $(".counter").removeClass("negative");
  }
});