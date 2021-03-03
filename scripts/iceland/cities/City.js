// Function that returns cities passed through as rendered HTML elements
export const icelandCitiesPost = (icelandCitiesObject) => {
    return(
        `<article class ="cities-card">
            <div><img class="cities-image" src ="../../images/iceland/${icelandCitiesObject.img}" alt="${icelandCitiesObject.name}"/></div>
            <h3 class="cities-name">${icelandCitiesObject.name}</h3>
            <p class="cities-population">Population: ${icelandCitiesObject.population}</p>
            <p class="cities-desc">${icelandCitiesObject.desc}</p>
        </article>`        
    )
} 