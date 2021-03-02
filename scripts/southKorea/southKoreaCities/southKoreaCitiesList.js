import { getSouthKoreaCities } from "./southKoreaCitiesData.js";
import { southKoreaCities } from "./southKoreaCities.js";

export const CityList = () => {
    const listOfSouthKoreanCities = getSouthKoreaCities();
    addsouthKoreaCitiesToDom(listOfSouthKoreanCities);
}

const addsouthKoreaCitiesToDom = (southKoreaCityArray) => {
    const southKoreaCitiesHTMLContentElement = document.querySelector(".citiesBin");
    let southKoreaCitiesHTMLRepresentation = "";
    for (const oneSouthKoreanCity of southKoreaCityArray) {
        southKoreaCitiesHTMLRepresentation += southKoreaCities(oneSouthKoreanCity);
    };
    southKoreaCitiesHTMLContentElement.innerHTML += `${southKoreaCitiesHTMLRepresentation}`;
};
