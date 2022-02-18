const pokemonContainer = document.querySelector('.pokemon-container')

function bringPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(response => response.json())
    .then(data => {
        createPokemon(data);
        console.log(data)
    })
}

function bringPokemons(number){
    for (let i = 1; i <= number; i++) {
        bringPokemon(i);
    }
}


function createPokemon(pokemon) {
    const card = document.createElement('div');
    card.classList.add('bloque');

    const spriteContainer = document.createElement('div');
    spriteContainer.classList.add('img-container');

    const sprite = document.createElement('img');
    sprite.src = pokemon.sprites.front_default

    spriteContainer.appendChild(sprite);

    const number = document.createElement('p');
    number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;

    const name = document.createElement('p');
    name.classList.add('name');
    name.textContent = pokemon.name

    const weight = document.createElement('p');
    weight.classList.add('weight');
    weight.textContent = ("Peso: ") + pokemon.weight

    const abilitiesTitle = document.createElement('h4');
    abilitiesTitle.classList.add('abilitiesTitle');
    abilitiesTitle.textContent = ("Habilidades: ");

    const abilitiesOne = document.createElement('p');
    abilitiesOne.classList.add('abilitiesOne');
    abilitiesOne.textContent = pokemon.abilities[0].ability.name;

    const abilitiesTwo = document.createElement('p');
    abilitiesTwo.classList.add('abilitiesTwo');
    abilitiesTwo.textContent = pokemon.abilities[1].ability.name;

    const types = document.createElement('p');
    types.classList.add('types');
    types.textContent = ("Tipo: ") + pokemon.types[1].type.name;

    console.log(pokemon.types[1].type.name);


/*     console.log(pokemon.abilities[1].ability.name);
 */
    card.appendChild(spriteContainer);
    card.appendChild(number);
    card.appendChild(name);
    card.appendChild(weight);
    card.appendChild(abilitiesTitle);
    card.appendChild(abilitiesOne);
    card.appendChild(abilitiesTwo);
    card.appendChild(types);
 
    pokemonContainer.appendChild(card);
}

const buscarPokemon = event => {
    event.preventDefault();
    const { value } = event.target.pokemon;
    fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
        .then(data => data.json())
        .then(response => renderPokemonData(response))
        .catch(err => renderNotFound())
}

bringPokemons(898);
