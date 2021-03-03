// a collection of iceland landmarks
const icelandLandmarks = [
    {
        name: "Solfarid Sculpture",
        desc: "Translated as the Sun Voyager, this sculpture was designed by Jón Gunnar Árnason, and was designed to convey the promise of adventure, progress and freedom.",
        img: "solfarid.jpg",
        closestCity: "Reykjavík"
    },
    {
        name: "The Blue Lagoon",
        desc: "One of the most visited natural attractions in Iceland, this spa is actual man made, a byproduct of a nearby geothermal plant.",
        img: "bluelagoon.jpg",
        closestCity: "Grindavik"
    },
    {
        name: "Svartifoss",
        desc: "Located in Vatnajökull National Park, this waterfall is known for it's sharp dark lava columns.",
        img: "svartifoss.jpg",
        closestCity: "Kirkjubæjarklaustur"
    }
];

// a function to return previous collection of landmarks
export const getIcelandLandmarks = () => {
    return icelandLandmarks;
}
