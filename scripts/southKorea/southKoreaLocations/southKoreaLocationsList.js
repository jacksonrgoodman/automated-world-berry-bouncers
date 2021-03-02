import { getSouthKoreaLandmarks } from "./southKoreaLocationsData.js";
import { southKoreaLandmarks } from "./southKoreaLocations.js";

export const LandmarksList = () => {
    const listOfSouthKoreanLandmarks = getSouthKoreaLandmarks();
    addsouthKoreaLandmarksToDom(listOfSouthKoreanLandmarks);
};

const addsouthKoreaLandmarksToDom = (southKoreaLandmarksArray) => {
    const southKoreaLandmarksHTMLContentElement = document.querySelector(".landmarkList");
    let southKoreaLandmarksHTMLRepresentation = "";
    for (const oneSouthKoreanLandmark of southKoreaLandmarksArray) {
        southKoreaLandmarksHTMLRepresentation += southKoreaLandmarks(oneSouthKoreanLandmark);
    };
    southKoreaLandmarksHTMLContentElement.innerHTML += `${southKoreaLandmarksHTMLRepresentation}`;
};
