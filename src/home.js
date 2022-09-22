import image from "./assets/images/food.png";

const text = {
    headerText: "Welcome to The ArmStrong Resturant",
    pText: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
  `
}

export default function addHomeElement() {
    const contentDiv = document.querySelector("#content");
    contentDiv.appendChild(createHomeContainer());
}

function createHomeContainer() {
    const homeContainer = document.createElement("div");
    homeContainer.classList.add("home-container");
    homeContainer.appendChild(addHomeTextContainer());
    homeContainer.appendChild(addHomeImage());

    return homeContainer;
}

function addHomeTextContainer() {
    const textContainer = document.createElement("div");
    textContainer.classList.add("home-text-container");

    textContainer.appendChild(addHomeTitle());
    textContainer.appendChild(addHomeParagraph());

    return textContainer;
}
function addHomeParagraph() {
    const homeParagraph = document.createElement("p");
    homeParagraph.classList.add("home-p");
    homeParagraph.textContent = text.pText.toString();


    return homeParagraph;
}
function addHomeTitle() {
    const homeTitle = document.createElement("h1");
    homeTitle.classList.add("home-h1");
    homeTitle.textContent = text.headerText;

    return homeTitle;
}
function addHomeImage() {
    const homeImage = document.createElement("img")
    homeImage.classList.add("home-image");
    homeImage.src = image;
    homeImage.width = "500";
    homeImage.height = "500";

    return homeImage;
}