// JavaScript code to handle carousel navigation
document.addEventListener('DOMContentLoaded', function() {
  const prevIcon = document.createElement('i');
  prevIcon.classList.add('prev-icon');
  prevIcon.innerHTML = "&#10094;";
  prevIcon.addEventListener('click', function() {
    carouselMove(-1);
  });

  const nextIcon = document.createElement('i');
  nextIcon.classList.add('next-icon');
  nextIcon.innerHTML = "&#10095;";
  nextIcon.addEventListener('click', function() {
    carouselMove(1);
  });

  document.querySelector('.youtube-carousel').appendChild(prevIcon);
  document.querySelector('.youtube-carousel').appendChild(nextIcon);

  let currentIndex = 0;
  const youtubeSections = document.querySelectorAll('.youtube-section-one');

  function carouselMove(step) {
    youtubeSections[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + step + youtubeSections.length) % youtubeSections.length;
    youtubeSections[currentIndex].style.display = 'block';
  }
});
