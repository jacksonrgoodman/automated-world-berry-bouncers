// a collection of iceland landmarks
const icelandLandmarks = [
    {
        name: "Solfarid Sculpture",
        desc: "",
        img: "solfarid.jpg",
        closestCity: "Reykjavík"
    },
    {
        name: "The Blue Lagoon",
        desc: "",
        img: "bluelagoon.jpg",
        closestCity: ""
    },
    {
        name: "Svartifoss",
        desc: "",
        img: "svartifoss.jpg",
        closestCity: ""
    }
];

// a function to return previous collection of landmarks
export const getIcelandLandmarks = () => {
    return icelandLandmarks;
}
