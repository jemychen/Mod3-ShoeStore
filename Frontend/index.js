// Code your solution here
fetch("http://localhost:3000/shoes")
    .then(r => r.json())
    .then(shoes => {
        renderAllShoes(shoes)
        renderDetail(shoes[0])
    })

function renderShoeSideBar(shoe) {
    const shoesContainer = document.querySelector("#shoe-list")
    const shoeLi = document.createElement("li")
    shoeLi.className = "item"
    shoeLi.dataset.id = shoe.id
    shoeLi.textContent = shoe.name

    shoeLi.addEventListener("click", e => {
        renderDetail(shoe)
    })
    shoesContainer.append(shoeLi)
}

function renderAllShoes(shoes) {
    shoes.forEach(shoe => renderShoeSideBar(shoe))
}