import logoImage from "./assets/images/logo.png";
const routes = [
    {
        name: "Home",
        route: "/home",
    },
    {
        name: "Menu",
        route: "/menu",
    },
    {
        name: "About",
        route: "/about",
    },
];

const contentElement = document.querySelector("#content");


export default function addHeaderElement(onRouteChange) {

    let headerElement = createHeaderElement(onRouteChange);
    contentElement.before(headerElement);
}

function createHeaderElement(onRouteChange) {

    const headerElement = document.createElement("header");
    headerElement.id = "header";
    headerElement.appendChild(addHeaderTitleImageContainer());
    headerElement.appendChild(addHeaderList(onRouteChange));
    return headerElement;
}
function addHeaderTitleImageContainer() {
    const titleImage = document.createElement("div");
    titleImage.classList.add("logo-image-container");
    titleImage.appendChild(addHeaderTitle());
    titleImage.appendChild(addHeaderImage());

    return titleImage;
}
function addHeaderTitle() {
    const headerTitle = document.createElement("h1");
    headerTitle.classList.add("header-title");
    headerTitle.textContent = "ArmStrong";
    return headerTitle;
}
function addHeaderImage() {
    const headerLogo = document.createElement("img");
    headerLogo.classList.add("header-title-img");
    headerLogo.setAttribute("src", logoImage);
    headerLogo.width = "100";
    headerLogo.height = "100";

    return headerLogo;
}

function addHeaderList(onRouteChange) {
    const headerList = document.createElement("ul");
    headerList.classList.add("header-list-container");
    routes.map((route) => {
        headerList.appendChild(addListItem(route.name, route.name, onRouteChange));
    });
    return headerList;
}

function addListItem(textContent, id, onRouteChange) {
    const headerListItem = document.createElement("li");
    headerListItem.classList.add("header-list-item");
    headerListItem.textContent = textContent;
    headerListItem.id = id;
    headerListItem.addEventListener("click", (e) => {
        onRouteChange(e.target.id);
    });
    return headerListItem;
}
