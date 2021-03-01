import { getIcelandCelebrities } from "./CelebritiesData.js";
import { icelandPeople } from "./Celebrities.js";

// A function that appends the iceland celebrities from getIcelandCelebrities then assigns it to a variable.
// It will then call a function that will add it to the DOM.
export const icelandCelebritiesList = () => {
    // Calls function to pull array, then assigns to variable.
    const pulledIclandCelebrities = getIcelandCelebrities();
    // Call function to inject into HTML
    addIcelandCelebritiesToDom(pulledIclandCelebrities);
}

const addIcelandCelebritiesToDom = (icelandCelebrityArray) => {
    // Assigns HTML position to variable.
    const icelandCelebritiesContentElement = document.querySelector(".TESTcelebrities");

    // Empty variable to hold HTML representation as it loops.
    let icelandCelebritiesHTMLRep = ``;

    // Loop over the array.
    for (const aCelebrity of icelandCelebrityArray) {
        icelandCelebritiesHTMLRep += icelandPeople(aCelebrity);
    }
    
    // Injects builds and injects completed HTML into defined position variable.
    icelandCelebritiesContentElement.innerHTML += `${icelandCelebritiesHTMLRep}`;
}