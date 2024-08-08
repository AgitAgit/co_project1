const _card = document.getElementById('card');
const _name = document.getElementById('name');
const _img = document.getElementById("img");
const _hp = document.getElementById('hp');
const _def = document.getElementById('defense');
const _atk = document.getElementById('attack');
const _input = document.getElementById("pokemonName");
const _searchButton = document.getElementById("searchButton");
const _pokemonArray = [ ] // try to create array holding pokemon buttons and use for-each to assign events listeners
const _pokemonButton = document.getElementById("pokemonButton");
let _data;

_searchButton.addEventListener("click",onSearchButtonClick); 
_pokemonButton.addEventListener("click",onDirectButtonClick); 


_input.value = 'pikachu';

_card.style.visibility = 'hidden';

function updateStats(name, imgSrc, stats){
    _card.style.visibility = "visible";
    _name.textContent = _data.name;
    _img.src = _data.sprites.front_default;
    _hp.textContent = `HP:${_data.stats[0].base_stat}`;
    _def.textContent = `DEFENSE:${_data.stats[2].base_stat}`;
    _atk.textContent = `ATTACK:${_data.stats[1].base_stat}`;
}

function turnAround(){
    if(_img.src === _data.sprites.front_default)
        _img.src = _data.sprites.back_default
    else   
        _img.src = _data.sprites.front_default;
}

function fetchData(pokemonName){
    if(!pokemonName) return;
    pokemonName = pokemonName.toLowerCase();
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(response => {
            if(!response.ok){
                throw new Error("Could not fetch resource")
            }
            
            return response.json();
        })
        .then(data => {
            console.log(data);
            _data = data;
            updateStats();
        })
        .catch(error => console.log(error));

    _input.value = '';
}
function onDirectButtonClick(e){
    console.log(e.target.textContent);
    
    fetchData(e.target.textContent)
}

function onSearchButtonClick(){
    fetchData(_input.value)
}