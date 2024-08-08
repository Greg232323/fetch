// main.js
// Importer les fonctions depuis function.js
import { createCard, displayMovies, formattingQuery } from './function.js';
/*===================> Import DATA via API <==================*/
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTRkMzM3NmRjMThkZTE0MDllMjQ5ZjVmMzZiMjU0NCIsIm5iZiI6MTcyMjk1NTYwOS40MTEzMywic3ViIjoiNjZiMjMwYzJlMGFkZDhiYzU2MmZmMWI3Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.mlhdOgQb9FwCKlYEySa6n_0P7hU3iOZVBFQdCIeKz7k",
  },
};

// Elements pour l'input
const searchIcon = document.getElementById("search-icon");
const searchContainer = document.querySelector(".search-container");
const closeSearchContainer = document.querySelector(".close-search");
const searchInput = document.getElementById("search-input");
const searchResults = document.querySelector(".search-results");
// référence pour effectuer des recherches sans toucher au tableau original des films récupérés.
// allMoviesSearch stocke la response.json()
let allMoviesSearch = [];

//  Récupération des données de l'API et affichage init
fetch("https://api.themoviedb.org/3/trending/movie/day?language=en-US", options)
  .then((response) => response.json())
  .then((response) => {
    //console.log(response)
    allMoviesSearch = response.results;
    // Afficher les films au chargement ==> Passer le tableau (results) à la fonction displayMovies
    displayMovies(allMoviesSearch);
    // Mise à jour du compteur de films pour PopUp
    const numberOfMovies = allMoviesSearch.length;
    const counter = document.querySelector(".counter");
    counter.textContent = numberOfMovies;
  })
  .catch((err) => console.error(err));

/*===================> Hamburger & navigation <==================*/
const faBar = document.querySelector(".fa-bars");
const nav = document.querySelector("nav");

// 1.1 Evenement toggle sur btn / nav
faBar.addEventListener("click", function () {
  nav.classList.toggle("hide");
});

/*===================> Fonctionnalités POPUP pour icon calculette <==================*/
const popup = document.getElementById("popup");
const showPopupButton = document.getElementById("show-popup");
const closePopupButton = document.getElementById("close-popup");

// Evénement de la Pop-up
showPopupButton.addEventListener("click", function () {
  popup.style.display = "flex";
});

closePopupButton.addEventListener("click", function () {
  popup.style.display = "none";
});

/*===================> Fonctionnalités icon movies <==================*/
// Afficher le conteneur de recherche au clic sur l'icône de film
searchIcon.addEventListener("click", function () {
  searchContainer.style.display = "flex";
  searchInput.focus();
});

// Fermer le conteneur de recherche lorsqu'on clique sur la croix
closeSearchContainer.addEventListener("click", function () {
  searchContainer.style.display = "none";
  displayMovies(allMoviesSearch);
});

// Filtrer les films en fonction de la saisie
searchInput.addEventListener("input", function () {
  const query = searchInput.value.toLowerCase();
  const filteredMovies = allMoviesSearch.filter((movie) =>
    movie.title.toLowerCase().includes(query)
  );
  // Afficher les films filtrés
  displayMovies(filteredMovies);
});

