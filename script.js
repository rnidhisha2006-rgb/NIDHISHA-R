function showArtwork(card) {

    const image = card.querySelector("img").src;
    const title = card.querySelector("h2").innerText;
    const description = card.querySelector("p").innerText;

    const modal = document.createElement("div");

    modal.className = "modal";

    modal.innerHTML = `
    <div class="modal-content">

        <button class="close-btn" onclick="closeArtwork()">×</button>

        <img src="${image}" class="popup-image">

        <h2>${title}</h2>

        <p>${description}</p>

        <button class="close-button" onclick="closeArtwork()">Close</button>

    </div>
`;
    

    document.body.appendChild(modal);
}


function closeArtwork() {

    const modal = document.querySelector(".modal");

    if (modal) {
        modal.remove();
    }
}