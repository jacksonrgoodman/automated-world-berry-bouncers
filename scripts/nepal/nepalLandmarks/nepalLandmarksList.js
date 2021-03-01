import { getNepalLandmarks } from "./nepalLandmarksData";
import { nepalLandmarks } from ".nepalLandmarks.js";

export const nepalLandmarksList = () => {
    const allNepalLandmarks = getNepalLandmarks();
    const DOMLocation = document.querySelector("#nepalLandmarksList");
    let  nepalLandmarksHTMLRepresentations = "";

    for(const oneThingFromNepalCelebrity of allNepalLandmarks) {
        nepalLandmarksHTMLRepresentations += nepalLandmarks(oneThingFromNepalCelebrity);

    }
    console.log("nepalLandmarksHTMLRepresentations", nepalLandmarksHTMLRepresentations);
    DOMLocation.innerHTML = nepalLandmarksHTMLRepresentations;
};