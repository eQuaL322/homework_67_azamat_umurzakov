function createCard(character) {
    const card = document.createElement("div");
    card.classList.add("character-card");
    card.innerHTML = `<h3>${character.name}</h3><img src="${character.image}" alt="${character.name}">`;
    card.addEventListener("click", () => {
        window.location.href = `character.html?id=${character.id}`;
    });
    return card;
}

function loadCharacters() {
    const api = "https://rickandmortyapi.com/api/character";
    fetch(api)
        .then((response) => response.json())
        .then((data) => {
            const characters = data.results;
            const charactersList = document.getElementById("characters-list");
            characters.forEach((character) => {
                const card = createCard(character);
                charactersList.appendChild(card);
            });
        })
}

loadCharacters();