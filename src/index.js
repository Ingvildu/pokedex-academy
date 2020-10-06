import { fetchPokemon, fetchPokemons } from "./services";

import {
  createHomeMarkup,
  createPokemonMarkup,
  createPokemonsMarkup,
  createPokemonsErrorMarkup,
  createPokemonsLoadingMarkup,
} from "./templates";

var mainNode = document.getElementById("main");

let currentPage = 0;
let perPage = 20;

function renderPokemon(pokemonId) {
  fetchPokemon(pokemonId).then(function (pokemon) {
    mainNode.innerHTML = createPokemonMarkup(pokemon);
    let backButtonNode = document.getElementById("back");
    backButtonNode.addEventListener("click", function () {
      renderPokemons();
    });
  });
}

function renderPokemons(page, perPage) {
  mainNode.innerHTML = createPokemonsLoadingMarkup();

  fetchPokemons(page, perPage)
    .then(function (pokemons) {
      mainNode.innerHTML = createPokemonsMarkup(pokemons, currentPage);

      let previousButtonNode = document.getElementById("previous");

      if (previousButtonNode) {
        previousButtonNode.addEventListener("click", function () {
          currentPage--;
          renderPokemons(currentPage, perPage);
        });
      }

      let nextButtonNode = document.getElementById("next");
      nextButtonNode.addEventListener("click", function () {
        currentPage++;
        renderPokemons(currentPage, perPage);
      });

      let pokemonListNode = document.getElementById("pokemonList");
      pokemonListNode.childNodes.forEach(function (child) {
        child.addEventListener("click", function (event) {
          let pokemonId = event.currentTarget.id;
          renderPokemon(pokemonId);
        });
      });
    })
    .catch(function (error) {
      mainNode.innerHTML = createPokemonsErrorMarkup(error);
    });
}

function renderHome() {
  mainNode.innerHTML = createHomeMarkup();

  var viewButtonNode = document.getElementById("view");
  viewButtonNode.addEventListener("click", function () {
    renderPokemons(currentPage, perPage);
  });
}

renderHome();
