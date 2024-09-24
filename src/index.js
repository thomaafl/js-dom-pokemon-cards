
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);



function renderCards() {
    const cardList = document.querySelector('.cards')
    cardList.innerHTML = ``
    data.forEach(pokemon => {
        const li = document.createElement('li')
        li.innerHTML = `
            <div class="card">
                <h2 class="card--title">${pokemon.name}</h2>
                <img
                    width="256"
                    class="card--img"
                    src="${pokemon.sprites.other["official-artwork"].front_default}"
                />
                <ul class="card--text">
                    <li>HP: ${pokemon.stats[0].base_stat}</li>
                    <li>ATTACK: ${pokemon.stats[1].base_stat}</li>
                    <li>DEFENSE: ${pokemon.stats[2].base_stat}</li>
                    <li>SPECIAL-ATTACK: ${pokemon.stats[3].base_stat}</li>
                    <li>SPECIAL-DEFENSE: ${pokemon.stats[4].base_stat}</li>
                    <li>SPEED: ${pokemon.stats[5].base_stat}</li>
                </ul>
            </div>
        `
        cardList.append(li)
        console.log(pokemon.name)
    })
}

renderCards()