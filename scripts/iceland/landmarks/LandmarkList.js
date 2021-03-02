import { getIcelandLandmarks } from "./LandmarkData.js";
import { icelandLandmarksPost } from "./Landmark.js";

// A function that appends the iceland landmarks from getIcelandLandmarks then assigns it to a variable.
// It will then call a function that will add it to the DOM.
export const icelandLandmarksList = () => {
    // Calls function to pull array, then assigns to variable.
    const pulledIclandLandmarks = getIcelandLandmarks();
    // Call function to inject into HTML
    addIcelandLandmarksToDom(pulledIclandLandmarks);
}

const addIcelandLandmarksToDom = (icelandLandmarkArray) => {
    // Assigns HTML position to variable.
    const icelandLandmarksContentElement = document.querySelector(".landmarkList");

    // Empty variable to hold HTML representation as it loops.
    let icelandLandmarksHTMLRep = ``;

    // Loop over the array.
    for (const aLandmark of icelandLandmarkArray) {
        icelandLandmarksHTMLRep += icelandLandmarksPost(aLandmark);
    }
    
    // Injects builds and injects completed HTML into defined position variable.
    icelandLandmarksContentElement.innerHTML += `${icelandLandmarksHTMLRep}`;
}