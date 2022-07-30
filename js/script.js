/*jshint esversion: 6 */

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = +prompt('Как бы вы оценили его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = +prompt('Как бы вы оценили его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);