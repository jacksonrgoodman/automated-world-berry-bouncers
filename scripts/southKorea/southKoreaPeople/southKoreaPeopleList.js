import { getSouthKoreaCelebrities } from "./southKoreaPeopleData.js";
import { southKoreaPeople } from "./southKoreaPeople.js";

export const celebrityList = () => {
    const listOfSouthKoreanCelebrities = getSouthKoreaCelebrities();
    addsouthKoreaCelebritiesToDom(listOfSouthKoreanCelebrities);
}

const addsouthKoreaCelebritiesToDom = (southKoreaCelebrityArray) => {
    const southKoreaCelebritiesHTMLContentElement = document.querySelector(".celebrityList");
    let southKoreaCelebritiesHTMLRepresentation = "";
    for (const oneSouthKoreanCelebrity of southKoreaCelebrityArray) {
        southKoreaCelebritiesHTMLRepresentation += southKoreaPeople(oneSouthKoreanCelebrity);
    };
    southKoreaCelebritiesHTMLContentElement.innerHTML += `${southKoreaCelebritiesHTMLRepresentation}`;
};
