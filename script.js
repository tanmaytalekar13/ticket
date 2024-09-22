document.addEventListener('DOMContentLoaded', function () {
  // Smooth Scrolling for Navigation
  document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Hero Video Play/Pause Functionality
  const video = document.getElementById('heroVideo');
  const videoControlBtn = document.getElementById('videoControlBtn');

  if (video && videoControlBtn) {
    videoControlBtn.addEventListener('click', () => {
      if (video.paused) {
        video.play();
        videoControlBtn.textContent = 'Pause Video';
      } else {
        video.pause();
        videoControlBtn.textContent = 'Play Video';
      }
    });
  }

  // Dynamic Event Cards
  const eventCards = document.getElementById('eventCards');
  const events = [
    { title: 'Music Concert', date: '22nd October', location: 'City Arena', img: 'assets/event1.png' },
    { title: 'Stand-up Comedy', date: '15th October', location: 'Laugh Club', img: 'assets/event2.png' },
  ];

  if (eventCards) {
    events.forEach(event => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <img src="${event.img}" alt="${event.title}">
        <h3>${event.title}</h3>
        <p>${event.date} - ${event.location}</p>
      `;
      eventCards.appendChild(card);
    });
  }

  // Dynamic Movie Cards
  const movieCards = document.getElementById('movieCards');
  const movies = [
    { title: 'Inception', genre: 'Sci-Fi', img: 'assets/movie1.png' },
    { title: 'The Dark Knight', genre: 'Action', img: 'assets/movie2.png' },
  ];

  if (movieCards) {
    movies.forEach(movie => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <img src="${movie.img}" alt="${movie.title}">
        <h3>${movie.title}</h3>
        <p>Genre: ${movie.genre}</p>
      `;
      movieCards.appendChild(card);
    });
  }
});
