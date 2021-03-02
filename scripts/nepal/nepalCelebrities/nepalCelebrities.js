import { getNepalCelebrities } from "./nepalCelebritiesData.js";
import { nepalCelebrities } from "./nepalCelebritiesList.js";

export const nepalCelebritiesList = () => {
    const allNepalCelebrities = getNepalCelebrities ();
    const DOMLocation = document.querySelector(".nepalCelebrityList");
    let  nepalCelebrityHTMLRepresentations = "";

    for(const oneThingFromNepalCelebrity of allNepalCelebrities) {
        nepalCelebrityHTMLRepresentations += nepalCelebrities(oneThingFromNepalCelebrity);

    }
    // console.log("nepalCelebrityHTMLRepresentations", nepalCelebrityHTMLRepresentations);
    DOMLocation.innerHTML += nepalCelebrityHTMLRepresentations;
};