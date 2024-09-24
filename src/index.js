
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);



function renderCards() {
    const cardList = document.querySelector('.cards')
    cardList.innerHTML = ``
    data.forEach(pokemon => {
        const li = document.createElement('li')
        const statsList = pokemon.stats.map(stat => `<li>${stat.stat.name}: ${stat.base_stat}</li>`).join('')
        const gameList = pokemon.game_indices.map(game => `<li>Game Version: ${game.version.name}</li>`).join('')
        li.innerHTML = `
            <div class="card">
                <h2 class="card--title">${pokemon.name}</h2>
                <img
                    width="256"
                    class="card--img"
                    src="${pokemon.sprites.other["official-artwork"].front_default}"
                />
                <ul class="card--text">
                    ${statsList}
                </ul>
                <h5>Pokemon appears in:</h5>
                <u1 class="games-appeared-in">${gameList}</u1>
            </div>
        `
        cardList.append(li)
        console.log(pokemon.name)
    })
}

renderCards()