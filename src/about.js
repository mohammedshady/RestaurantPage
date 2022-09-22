const link = 'https://maps.google.com/maps?q=Hollywood%20Boulevard%2042,%20Los%20Angeles,%20USA&t=&z=13&ie=UTF8&iwloc=&output=embed';

export default function addAboutElement() {
    const contentDiv = document.querySelector("#content")
    contentDiv.appendChild(createAboutElement());
}

function createAboutElement() {
    const aboutElement = addAboutContainer()
    aboutElement.appendChild(addAboutInnerContainer());
    return aboutElement;
}

function addAboutContainer() {
    const aboutElement = document.createElement("div");
    aboutElement.classList.add("about-container");
    aboutElement.classList.add("slide-top");
    return aboutElement
}

function addAboutInnerContainer() {
    const aboutContainer = document.createElement("div");
    aboutContainer.classList.add("p-iframe-container");
    aboutContainer.appendChild(addAboutParagraph())
    aboutContainer.appendChild(addAboutMap())
    return aboutContainer;
}
function addAboutParagraph() {
    const aboutParagraph = document.createElement("p");
    aboutParagraph.classList.add("about-p");
    aboutParagraph.textContent = "📞 1234567890";
    return aboutParagraph
}
function addAboutMap() {
    const aboutMap = document.createElement("iframe");
    aboutMap.src = link;
    return aboutMap;
}

