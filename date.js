const updatePostDate = function() {
  const dateElement = document.getElementById('postDate');
  const currentDate = new Date();

  const formattedDate = currentDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  dateElement.textContent = formattedDate;
}

updatePostDate();