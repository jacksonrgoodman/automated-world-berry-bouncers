// a collection of iceland celebrities
const icelandCelebrities = [
    {
        name: "Björk",
        job: "musician",
        img: "bjork.jpg",
        bio: "Born in 1965, Björk is a singer, songwriter, and producer who has gained fame for her unique blend of pop, classical, and avant-garde music."
    },
    {
        name: "Stefan Karl Stefansson",
        job: "actor",
        img: "stefan.jpg",
        bio: "Born in 1975, Stefán was a actor known for his iconic role as 'Robbie Rotten in the hit childen's television show, 'Lazy Town'."
    },
    {
        name: "Leif Erikson",
        job: "sailor",
        img: "leif.jpg",
        bio: "Born in the late 900s, Lief was a Norse explorer who is thought to be the first European to set foot in North America."
    }
];

// a function to return previous collection of celebrities
export const getIcelandCelebrities = () => {
    return icelandCelebrities;
}