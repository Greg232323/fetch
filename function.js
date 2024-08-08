// function.js
// Container movies
const ul = document.querySelector(".movies-container");
// 1. Fonction :créer un élément de liste <li> qui contient une "carte" de film.
export function createCard(movie) {
  const li = document.createElement("li");
  const card = document.createElement("div");
  const img = document.createElement("img");
  const title = document.createElement("h3");
  const popularity = document.createElement("p");
  const avg = document.createElement("p");
  const description = document.createElement("p");
  //Manque la date à récupérer !!!!!!!
  //console.log(movie);

  img.src = "https://image.tmdb.org/t/p/original" + movie.poster_path;
  img.alt = movie.title;
  title.textContent = movie.title;
  description.textContent = movie.overview;
  popularity.textContent = `Vote count : ${movie.vote_count}`;
  avg.textContent = `Vote avg : ${movie.vote_average}`;

  // Ajout des éléments à la card
  card.append(img, title, popularity, avg, description);

  // Ajout de la card aux li
  li.appendChild(card);

  // Appliquer le style à la card
  formattingQuery(card, img, title, popularity, avg, description);

  return li;
}
// 2. Fonction : Afficher une liste de films dans <ul> en utilisant modéle de card avec createCard(movie).
export function displayMovies(movies) {
  // Vider ul avant d'ajouter les éléments
  ul.textContent = "";
  movies.forEach((movie) => {
    //Ajoute l'élément li retourné par createCard à ul
    ul.appendChild(createCard(movie));
  });
}
// 3. Fonction pour formatage en CSS des données récupérées MANQUE DATE !!!!<===========*/
export function formattingQuery(card, img, title, popularity, avg, description) {
  card.classList.add("movie-card");
  img.classList.add("movie-poster");
  title.classList.add("movie-title");
  popularity.classList.add("movie-popularity");
  avg.classList.add("movie-avg");
  description.classList.add("movie-description");
}
