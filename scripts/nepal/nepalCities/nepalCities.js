

import { getNepalCities } from "./nepalCitiesData.js";
import { nepalCities } from "./nepalCitiesList.js";

export const nepalCitiesList = () => {
    const allNepalCities = getNepalCities ();
    const DOMLocation = document.querySelector(".nepalCitiesList");
    let  nepalCitiesHTMLRepresentations = "";

    for(const oneThingFromNepalCities of allNepalCities) {
        nepalCitiesHTMLRepresentations += nepalCities(oneThingFromNepalCities);

    }
    // console.log("nepalCitiesHTMLRepresentations", nepalCitiesHTMLRepresentations);
    DOMLocation.innerHTML += nepalCitiesHTMLRepresentations;
};