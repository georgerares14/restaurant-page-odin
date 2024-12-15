import { loadPage } from "./first-load";
import { loadMenu } from "./menu";
import { loadContactPage } from "./contact";
import "./styles.css"

loadPage();
console.log("Functioneaza!");

const homeButton = document.querySelectorAll("button")[0];
const menuButton = document.querySelectorAll("button")[1];
const contactButton = document.querySelectorAll("button")[2];

homeButton.addEventListener("click", loadPage);
menuButton.addEventListener("click", loadMenu);
contactButton.addEventListener("click", loadContactPage)