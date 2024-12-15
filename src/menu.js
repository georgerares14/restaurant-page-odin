const contentContainer = document.querySelector("#content");

const menuItems = [
    {
        name: "Gulas",
        ingrediente: ["ciuperci", "ardei", "usturoi", "cartofi"],
        pret: 18
    },
    {
        name: "Supa",
        ingrediente: ["rosi", "lapte", "ceapa"],
        pret: 15
    },
    {
        name: "Pizza",
        ingrediente: ["rosi", "ceapa", "lapte"],
        pret: 50
    },
    {
        name: "Paste",
        ingrediente: ["lapte", "ardei"],
        pret: 46
    },
    {
        name: "Salata",
        ingrediente: ["oua", "peste", "ardei", "usturoi", "ciuperci"],
        pret: 15
    },
    {
        name: "Burger",
        ingrediente: ["carne", "ceapa", "usturoi", "ardei"],
        pret: 42
    },
    {
        name: "Frigarui",
        ingrediente: ["carne", "rosi", "ciuperci", "peste"],
        pret: 30
    },
    {
        name: "Omleta",
        ingrediente: ["oua", "lapte", "ceapa"],
        pret: 12
    },
    {
        name: "Ratatouille",
        ingrediente: ["ardei", "cartofi", "rosi", "ciuperci"],
        pret: 25
    },
    {
        name: "Tocanita",
        ingrediente: ["peste", "usturoi", "lapte", "carne"],
        pret: 37
    }
]


function loadMenu() {
    contentContainer.innerHTML = "";
    for (let { name, ingrediente, pret } of menuItems) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        productCard.innerHTML = `
            <p class="name">${name}</p>
            <p class="ingredients">${ingrediente.join(", ")}</p>
            <p class="price">${pret}$</p>
        `;

        contentContainer.appendChild(productCard);
    }
}

/*
function loadMenu() {
    for(let product of menuItems){
        const name = product.name;
        const ingredients = product.ingrediente.join(', ');
        const pret = product.price + "$";
        
        document.createElement("div").classList.add("product-card");
        
        const nameElem = document.createElement("p").classList.add("name")
        const ingredientsElem = document.createElement("p").classList.add("ingredients")
        const priceElem = document.createElement("p").classList.add("price")

        const productCard = document.createElement("div").classList.add("product-card");
        productCard.append(nameElem, ingredientsElem, priceElem)

        contentContainer.appendChild(productCard);
    }
}
*/

export {loadMenu}