// a collection of iceland cities
const icelandCities = [
    {
        name: "Reykjavik",
        population: "131,136",
        img: "reykjavik.jpg",
        desc: "Believed to be the first major settlement in Iceland, this capital city lies along the Faxaflói bay."
    },
    {
        name: "Akureyri",
        population: "18,191",
        img: "akureyri.jpg",
        desc: "An important port in northern Iceland, this town serves as a economic hub due to it's comparatively pleasant climate for fishing and shipping."
    },
    {
        name: "Húsavík",
        population: "2,307",
        img: "husavik.jpg",
        desc: "This small town has become a tourist destination for determined whale-watchers."
    }
];

// a function to return previous collection of cities
export const getIcelandCities = () => {
    return icelandCities;
}