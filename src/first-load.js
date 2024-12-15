const contentContainer = document.querySelector("#content");

function loadPage(){
    contentContainer.innerHTML =''
    const title = document.createElement("h2");
    title.textContent = "FeliX Restaurant";
    const img = document.createElement('img');
    img.alt = 'FeliX Restaurant Interior'
    const mainText = document.createElement('p');
    mainText.textContent = "Officia magna eu deserunt sint excepteur fugiat anim Lorem magna aute. Culpa sunt duis aliquip ipsum officia Lorem. Officia irure consectetur consequat et tempor occaecat pariatur. Aute elit incididunt velit laboris id dolore excepteur id sint. Amet officia aliqua nulla fugiat deserunt culpa sint." 

    contentContainer.append(title, img, mainText)
}

export {loadPage}