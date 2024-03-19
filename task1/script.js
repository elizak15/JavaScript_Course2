let numberOfFilms = +prompt("How many films did you watch?");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const nameOfFilm = prompt("What the last film you watch", "");
const rentOfFilm = +prompt("How you rent it?");

const nameOfFilm1 = prompt("What the last film you watch", "");
const rentOfFilm1 = +prompt("How you rent it?");

personalMovieDB.movies[nameOfFilm] = rentOfFilm;
personalMovieDB.movies[nameOfFilm1] = rentOfFilm1;

console.log(personalMovieDB)