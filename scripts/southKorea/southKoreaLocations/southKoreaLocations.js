export const southKoreaLandmarks = (southKoreaLandmarksObj) => {
    return(
        `<article class="landmarks-card">
            <div><img class="landmarks-image" src="../../images/southKorea/${southKoreaLandmarksObj.img}" alt="Celebrity" /></div>
            <h3 class= "landmarks-name">${southKoreaLandmarksObj.name}</h3>
            <p class= "landmarks-desc">${southKoreaLandmarksObj.desc}</p>
            <p class= "landmarks-city">The closest city to ${southKoreaLandmarksObj.name} is:${southKoreaLandmarksObj.closestCity}</p>
        </article>`
    );
};
