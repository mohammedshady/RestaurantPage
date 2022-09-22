import "./styles/style.css";
import addHomeElement from "./home";
import addAboutElement from "./about";
import addHeaderElement from "./header";
import addMenuElement from "./menu"
const divContentElement = document.querySelector("#content");




addHomeElement()
addHeaderElement(onRouteChange);


function onRouteChange(route) {
    divContentElement.innerHTML = "";

    if (route == "About") {
        addAboutElement();
    }
    else if (route == "Home") {
        console.log(route);
        addHomeElement();
    }
    else {
        console.log(route);
        addMenuElement();
    }
    // }
}




