import image1 from "./assets/images/item1.png";
import image2 from "./assets/images/item2.png";
import image3 from "./assets/images/item3.png";


const foodMenu = [{
    name: "dish1",
    img: image1
},
{
    name: "dish2",
    img: image2
},
{
    name: "dish3",
    img: image3
}
]


export default function addMenuElement() {
    const contentDiv = document.querySelector("#content");
    contentDiv.appendChild(createMenuElement());

}
function createMenuElement() {
    const menuElement = document.createElement("div");
    menuElement.classList.add("menu-container");
    menuElement.appendChild(addMenuList());

    return menuElement;
}
function addMenuList() {
    const menuList = document.createElement("ul");
    menuList.classList.add("menu-list");
    foodMenu.map((menuItem) => {
        menuList.appendChild(addMenuListItem(menuItem.name, menuItem.img))
    })
    return menuList;
}

function addMenuListItem(name, img) {
    const menuItem = document.createElement("li");
    menuItem.classList.add("menu-item");
    menuItem.appendChild(addImageToListItem(img));
    menuItem.appendChild(addHeaderToListItem(name))

    return menuItem;
}
function addHeaderToListItem(name) {
    const itemHeader = document.createElement("h1");
    itemHeader.classList.add("item-header");
    itemHeader.textContent = name;
    return itemHeader;

}
function addImageToListItem(img) {
    const itemImage = document.createElement("img");
    itemImage.classList.add("item-image");
    itemImage.src = img;
    itemImage.width = "200";
    itemImage.height = "200";
    return itemImage;
}