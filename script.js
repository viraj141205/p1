const movies = [
    { title: "Inception", genre: "Sci-Fi", rating: 8.8, releaseYear: 2010 },
    { title: "The Godfather", genre: "Crime", rating: 9.2, releaseYear: 1972 },
    { title: "The Dark Knight", genre: "Action", rating: 9.0, releaseYear: 2008 },
    { title: "Pulp Fiction", genre: "Crime", rating: 8.9, releaseYear: 1994 },
    { title: "The Shawshank Redemption", genre: "Drama", rating: 9.3, releaseYear: 1994 }
];
function addMovie(title, genre, rating, releaseYear) {
    const newMovie = { title, genre, rating, releaseYear };
    movies.push(newMovie);
    console.log(`Added movie: ${title}`);
}
function listMoviesByGenre(genre) {
    const filteredMovies = movies.filter(movie => movie.genre === genre);
    console.log(`Movies in the genre "${genre}":`);
    filteredMovies.forEach(movie => console.log(`- ${movie.title} (${movie.releaseYear})`));
}
function findHighestRatedMovie() {
    const highestRated = movies.reduce((prev, current) => (prev.rating > current.rating) ? prev : current);
    console.log(`Highest-rated movie: ${highestRated.title} with a rating of ${highestRated.rating}`);
}
function getAllMovieTitles() {
    const titles = movies.map(movie => movie.title);
    console.log(`All movie titles: ${titles.join(', ')}`);
}
function findMoviesReleasedAfter(year) {
    const recentMovies = movies.filter(movie => movie.releaseYear > year);
    console.log(`Movies released after ${year}:`);
    recentMovies.forEach(movie => console.log(`- ${movie.title} (${movie.releaseYear})`));
}
addMovie("Interstellar", "Sci-Fi", 8.6, 2014);
listMoviesByGenre("Crime");
findHighestRatedMovie();
getAllMovieTitles();
findMoviesReleasedAfter(2000);