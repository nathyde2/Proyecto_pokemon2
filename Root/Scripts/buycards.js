let url="https://pokeapi.co/api/v2/ pokemon"
const createPokemon= async () => {
    try{
        const res = await fetch(url);
        const data = await res.json ();

        data.results.forEach(async (pokemon) => {
         
            const respons = await fetch(pokemon.url);
            const dataPokemon = await respons.json();

            const conteiner = document.querySelector('.conteiner');
            let pokeCard = document.createElement('div');
            pokeCard.className = 'pokeCard';
            pokeCard.innerHTML = 

            <div class = "headerCard">
                <p>${dataPokemon.name}</p>
                <i>
            </div>
        
        });
    }catch (error) {
        alert error
    }
}