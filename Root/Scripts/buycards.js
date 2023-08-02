let url="https://pokeapi.co/api/v2"

const filterOptions= document.querySelectorAll('.navall');

filterOptions.forEach(Option => Option.addEventListener('click', filterByType));

function filterByType (event) { 
    const typeName = event.target.textContent.toLowerCase();
    if (typeName==='all'){
        createPokemon();
        } 
        
        else { 
            const endPoint = `${url}/type/${typeName}`;

        console.log (endPoint);

        getPokemonByType(endPoint);
        }

 async function getPokemonByType (endPoint){
    const respons = await fetch (endPoint);
    const allData = await respons.json();
    const pokemonData = await getPokemonData(allData.pokemon);
    showCards(pokemonData);
 }   

function showCards(pokemons){
    console.log(pokemons.length);
    const container = document.querySelector('.container');
    container.innerHTML='';
    console.log(pokemons);
}

 async function getPokemonData (data){
    const pokemonData = [];
    data.forEach(async(item) =>{
        const respons = await fetch (item.pokemon.url);
        const data = await respons.json();
        
        pokemonData.push({id: data.id,
            name:data.name,
            img:data.sprites.other["home"].front_default,
        });
    });

 return pokemonData;   
    
 }   




}



const createPokemon= async () => {
    try{
        const res = await fetch(`${url}/pokemon`)
        const data = await res.json ();

        data.results.forEach(async (pokemon) => {
         
            const respons = await fetch(pokemon.url);
            const dataPokemon = await respons.json();

            const container = document.querySelector('.container');
            let pokeCard = document.createElement('div');
            pokeCard.className = 'pokeCard';
            pokeCard.innerHTML = ` 

             <div class = "headerCard">
                <p>${dataPokemon.name}</p>
                <i class = "a-sharp fa-regular fa-heart"></i>
            </div>

            <img class = "imgPoke" src = "${dataPokemon.sprites.other["home"].front_default}">

            <div>
                 <p>${dataPokemon.base_experience}</p>
                 <button>Buy</button>
            </div>
            `
            container.appendChild(pokeCard);
            pokeCard.setAttribute("type1",type1);
            pokeCard.setAttribute("type2",type2);

            
        
        });
    }catch (error) {
        alert ("error")
    }
}
createPokemon();