/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach((temple) => {

        const article = document.createElement("article");
        
        const h3 = document.createElement("h3");
        h3.innerHTML = `${temple.templeName}Temple`;
        h3.style.textAlign = "center";
        h3.style.position = "relative"
        h3.style.bottom= "25px";

        const img = document.createElement("img");
        img.setAttribute('src', temple.imageUrl);
        img.setAttribute('alt', temple.location);
        img.style.boxShadow = "0px 0px 25px black";

        article.append(h3, img);
        article.style.backgroundColor = "#b9b9b9";
        article.style.padding = "150px";
        article.style.margin = "10px";

        templesElement.appendChild(article);
    });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {

    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");

    if (response.ok)
    {
        templeList = await response.json();
        displayTemples(templeList);
    }
}


/* reset Function */
const reset = () => {
    templesElement.innerHTML = '';
}

/* filterTemples Function */
const filterTemples = (temples) => {
    reset();
    const filter = document.getElementById("filtered").value;
    switch (filter) {
        case "utah":
            displayTemples(temples.filter((temple) =>temple.location.includes("Utah")));
            break;
        case "notutah":
            displayTemples(temples.filter((temple) =>!temple.location.includes("Utah")));
            break;
        case "older":
            displayTemples(temples.filter((temple) =>new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case "all":
        default:
            displayTemples(temples);
    }
}


/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => {
    filterTemples(templeList);
});

getTemples();