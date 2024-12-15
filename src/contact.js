const contentContainer = document.querySelector("#content");

function loadContactPage () {
    contentContainer.innerHTML = '';

    const title = document.createElement("h2");
    title.classList.add("contact-title");
    const text = document.createElement("p");
    text.classList.add("contact-info");
    title.textContent = "Contact us!";
    text.textContent = "0756321992";

    contentContainer.append(title,text)
}

export {loadContactPage}