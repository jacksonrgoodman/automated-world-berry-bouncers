
export const nepalCelebrities = (nepalCelebritiesObj) => {
    return(
        `<article class="celebrity-card">
        <div><img class="celebrity-image" src ="../../../images/nepal/${nepalCelebritiesObj.img}" alt="celebrity"/></div>
        <h3 class ="celebrity-name">${nepalCelebritiesObj.name}</h3>
        <p class ="celebrity-bio">${nepalCelebritiesObj.bio}</p>
        <p class = "celebrity-job">${nepalCelebritiesObj.job}</p>
        </article>`
    );
}; 