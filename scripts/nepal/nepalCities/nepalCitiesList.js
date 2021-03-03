export const nepalCities = (nepalCitiesObj) => {
    return(
        `<article class="cities-card">
        <div class="city-image"><img class="cities-image" src ="../../../images/nepal/${nepalCitiesObj.img}" alt="city"/></div>
        <h3 class ="cities-name">${nepalCitiesObj.name}</h3>
        <p class ="cities-population">Population: ${nepalCitiesObj.population}.</p>
        <p class = "cities-desc">${nepalCitiesObj.desc}</p>
        </article>`
    );
};