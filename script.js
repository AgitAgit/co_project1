const _name = document.getElementById('name');
const _img = document.getElementById("img");
const _hp = document.getElementById('hp');
const _def = document.getElementById('defense');
const _atk = document.getElementById('attack');

function updateStats(name, imgSrc, stats){
    _name.textContent = name;
    _img.src = imgSrc;
    _hp.textContent = `HP:${stats[0].base_stat}`;
    _def.textContent = `DEFENSE:${stats[2].base_stat}`;
    _atk.textContent = `ATTACK:${stats[1].base_stat}`;
}

function fetchData(){
    const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(response => {
            if(!response.ok){
                throw new Error("Could not fetch resource")
            }
            
            return response.json();
        })
        .then(data => {
            console.log(data);

            updateStats(data.name, data.sprites.front_default, data.stats);
        })
        .catch(error => console.log(error));
}