export const southKoreaPeople = (southKoreaPeopleObj) => {
    return(
        `<article class="people-card">
            <div><img class="people-image" src="../../images/southKorea/${southKoreaPeopleObj.img}" alt="Celebrity" /></div>
            <h3 class= "people-name">${southKoreaPeopleObj.name}</h3>
            <p class= "job">${southKoreaPeopleObj.job}</p>
            <p class= "bio">${southKoreaPeopleObj.bio}</p>
        </article>`
    );
};
