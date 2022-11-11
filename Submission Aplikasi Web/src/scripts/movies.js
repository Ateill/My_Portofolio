import * as $ from 'jquery';

export const ListAllMovie = [];
//Now Playing Movies
const API_URL_NowPlaying = 'https://api.themoviedb.org/3/movie/now_playing?api_key=bdbf8d112c170844e71cef3c5f1b3213';

$(function NowPlaying() {
  fetch(API_URL_NowPlaying)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("NETWORK RESPONSE ERROR");
      }
    })
    .then(data => {
      const list_data_movies = data.results;

      list_data_movies.forEach((movies) => {
        const {
          id,
          title,
          overview,
          poster_path,
          vote_average,
          release_date
        } = movies;

        $("#NowPlayingMovies").append(`
            <div class="card">
              <img src="https://image.tmdb.org/t/p/w500${poster_path}" class="card-img-top" alt="..." />
              <div class="card-body">
                  <h5 class="card-title" id="${id}">${title}</h5>
                  <p class="card-overview">${overview}</p>
              </div>
            </div>
        `)
        ListAllMovie.push(movies);
      })
    })
    .then(()=>{
      $("#NowPlayingMovies").slick({
        dots: true,
        loop: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        prevArrow: $(".prev-arrow"),
        nextArrow: $(".next-arrow"),
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ], 
      });
    })
    .catch((error) => console.error("FETCH ERROR:", error));
});

//Top Rated Movies
const API_URL_TopRated = 'https://api.themoviedb.org/3/movie/top_rated?api_key=bdbf8d112c170844e71cef3c5f1b3213';

$(function TopRated() {
  fetch(API_URL_TopRated)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("NETWORK RESPONSE ERROR");
      }
    })
    .then(data => {
      const list_data_movies = data.results;

      list_data_movies.forEach((movies) => {
        const {
          id,
          title,
          overview,
          poster_path,
          vote_average,
          release_date
        } = movies;

        $("#ListTopRatedMovies").append(`
            <div class="card">
              <img src="https://image.tmdb.org/t/p/w500${poster_path}" class="card-img-top" alt="..." />
              <div class="card-body">
                  <h5 class="card-title" id="${id}">${title}</h5>
                  <p class="card-overview">${overview}</p>
              </div>
            </div>
        `)
        ListAllMovie.push(movies);
      })
    })
    .then(()=>{
      $("#ListTopRatedMovies").slick({
        dots: true,
        loop: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        prevArrow: $(".prev-arrow-rated"),
        nextArrow: $(".next-arrow-rated"),
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ], 
      });
    })
    .then(() => {
      $(".card-title").click(function GetDetailMovie() {
        const Id = $(this).attr('id');
        ListAllMovie.forEach(movie => {
          if (movie.id == Id){
            console.log(movie.title);
          }
        })
      })
    })
    .catch((error) => console.error("FETCH ERROR:", error));
});

// Movie JS
$('.back-btn').click(function() {
  window.location.href = "index.html";
});
