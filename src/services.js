export function fetchPokemon(id) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(function (
    response
  ) {
    return response.json();
  });
}

export function fetchPokemons(page, perPage) {
  return fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${
      page * perPage
    }`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      return data.results;
    });
}
