import { getIcelandCities } from "./CityData.js";
import { icelandCitiesPost } from "./City.js";

// A function that appends the iceland cities from getIcelandCities then assigns it to a variable.
// It will then call a function that will add it to the DOM.
export const icelandCitiesList = () => {
    // Calls function to pull array, then assigns to variable.
    const pulledIclandCities = getIcelandCities();
    // Call function to inject into HTML
    addIcelandCitiesToDom(pulledIclandCities);
}

const addIcelandCitiesToDom = (icelandCelebrityArray) => {
    // Assigns HTML position to variable.
    const icelandCitiesContentElement = document.querySelector(".cityList");

    // Empty variable to hold HTML representation as it loops.
    let icelandCitiesHTMLRep = ``;

    // Loop over the array.
    for (const aCity of icelandCelebrityArray) {
        icelandCitiesHTMLRep += icelandCitiesPost(aCity);
    }
    
    // Injects builds and injects completed HTML into defined position variable.
    icelandCitiesContentElement.innerHTML += `${icelandCitiesHTMLRep}`;
}