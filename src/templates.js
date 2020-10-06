import { getCapitalized, getIdFromUrl, getAnimatedImageFromId } from "./utils";

export function createHomeMarkup() {
  return `<h1>My Pokedex</h1>
          <button id="view">View pokemons</button>
          `;
}

export function createPokemonCardMarkup(pokemon) {
  let pokemonId = getIdFromUrl(pokemon.url);
  let imageUrl = getAnimatedImageFromId(pokemonId);
  console.log(pokemon);
  return `
      <div class="pokemonCard" id="${pokemonId}">
      <img src=${imageUrl}>
          <h3>${getCapitalized(pokemon.name)}</h3>
      </div>`;
}

export function createPokemonsMarkup(pokemons, currentPage) {
  var pokemonList = pokemons.map(createPokemonCardMarkup).join("");

  let isFirstPage = currentPage == 0;

  return `
      <h1>My Pokemons</h1>
      ${isFirstPage ? "" : `<button id="previous">Previous</button>`}
      <button id="next">Next</button>
      <div id="pokemonList">
      ${pokemonList}
      </div>`;
}

export function createPokemonMarkup(pokemon) {
  return `
      <div class="${pokemon.types[0].type.name}">
      <h1>${getCapitalized(pokemon.name)}</h1>
      <p>
      Height: ${pokemon.height}
      </p>
      <div>
      <img src="${pokemon.sprites.other.dream_world.front_default}">
      </div>
      <div>
      <img src="${pokemon.sprites.front_default}">
      </div>
      <div>
      <button id="back">Back</button>
      </div>
      </div>`;
}

export function createPokemonsErrorMarkup(error) {
  return `
    <h3>Unable to get Pokemons</h3>
    <p>${error.message}</p>
    <p>Check your internet connection</p>
    `;
}

export function createPokemonsLoadingMarkup() {
  return `
    <h3>Loading...<h3>`;
}
