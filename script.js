


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
            console.log(data)
            const pokemonSprite = data.sprites.front_default;
            const imgElement = document.getElementById("pokemonSprite");
            
            imgElement.src = pokemonSprite;
            imgElement.style.display = "block";
        })
        .catch(error => console.log(error));
}