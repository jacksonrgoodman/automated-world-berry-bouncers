// Function that returns people passed through as rendered HTML elements
export const icelandPeople = (icelandPeopleObject) => {
    return(
        `<article class ="people-card">
            <div><img class="people-image" src ="../../images/iceland/${icelandPeopleObject.img}" alt="${icelandPeopleObject.name}"/></div>
            <h3 class="people-name">${icelandPeopleObject.name}</h3>
            <p class="people-job">${icelandPeopleObject.job}</p>
            <p class="people-bio">${icelandPeopleObject.bio}</p>
        </article>`        
    )
} 