export const southKoreaCities = (southKoreaCitiesObj) => {
    return(
        `<article class="people-card">
            <div><img class="cities-image" src="../../images/southKorea/${southKoreaCitiesObj.img}" alt="Celebrity" /></div>
            <h3 class= "cities-name">${southKoreaCitiesObj.name}</h3>
            <p class= "cities-population">Population:${southKoreaCitiesObj.population} people</p>
            <p class= "cities-desc">${southKoreaCitiesObj.desc}</p>
        </article>`
    );
};