import { getNepalLandmarks } from "./nepalLandmarksData.js";
import { nepalLandmarks } from "./nepalLandmarksList.js";

export const nepalLandmarksList = () => {
    const allNepalLandmarks = getNepalLandmarks();
    const DOMLocation = document.querySelector(".nepalLandmarksList");
    let  nepalLandmarksHTMLRepresentations = "";

    for(const oneThingFromNepalLandmarks of allNepalLandmarks) {
        nepalLandmarksHTMLRepresentations += nepalLandmarks(oneThingFromNepalLandmarks);

    }
    console.log("nepalLandmarksHTMLRepresentations", nepalLandmarksHTMLRepresentations);
    DOMLocation.innerHTML += nepalLandmarksHTMLRepresentations;
};