// Function that returns landmarks passed through as rendered HTML elements
export const icelandLandmarksPost = (icelandLandmarksObject) => {
    return(
        `<article class ="landmarks-card">
            <div><img class="landmarks-image" src ="../../images/iceland/${icelandLandmarksObject.img}" alt="${icelandLandmarksObject.name}"/></div>
            <h3 class="landmarks-name">${icelandLandmarksObject.name}</h3>
            <p class="landmarks-city">Closest City: ${icelandLandmarksObject.closestCity}</p>
            <p class="landmarks-desc">${icelandLandmarksObject.desc}</p>
        </article>`        
    )
} 