function detailsCharacter(character) {
    const details = document.createElement("div");
    details.classList.add("character-details");
    details.innerHTML = `
          <h2>${character.name}</h2>
          <img src="${character.image}" alt="${character.name}">
          <p>Status: ${character.status}</p>
          <p>Species: ${character.species}</p>
          <p>Type: ${character.type}</p>
          <p>Gender: ${character.gender}</p>
          <p>Origin: ${character.origin.name}</p>
          <p>Location: ${character.location.name}</p>`;
    return details;
}

function loadCharacterDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const characterId = urlParams.get('id');
    const apiUrl = `https://rickandmortyapi.com/api/character/${characterId}`;
    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            const characterDetails = document.getElementById("character-details");
            const details = detailsCharacter(data);
            characterDetails.appendChild(details);
        })
}

window.onload = loadCharacterDetails;