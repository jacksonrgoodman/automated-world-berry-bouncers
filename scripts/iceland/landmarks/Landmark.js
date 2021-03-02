// Function that returns landmarks passed through as rendered HTML elements
export const icelandLandmarksPost = (icelandLandmarksObject) => {
    return(
        `<article class ="landmarks-card">
            <div><img class="landmarks-image" src ="../../images/iceland/${icelandLandmarksObject.img}" alt="${icelandLandmarksObject.name}"/></div>
            <h3 class="landmarks-name">${icelandLandmarksObject.name}</h3>
            <p class="landmarks-job">${icelandLandmarksObject.job}</p>
            <p class="landmarks-bio">${icelandLandmarksObject.bio}</p>
        </article>`        
    )
} 