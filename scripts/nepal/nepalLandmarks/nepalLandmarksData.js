const nepalLandmarkList = [
{
    name: "Mount Everest",
    desc: " On the border of Nepal and China lies the worlds highest mountain!",
    img: "everest.jpg",
    closestCity: "Kathmandu",
},
{
    name: "Lumbini",
    desc:"Lumbini houses the Maya Devi temple and its Sacred Garden, known as the birthplace of the Shakyamuni Buddha",
    img: "lumbini.jpg",
    closestCity: "Gorakhpur",
},
{
    name: "Chitwan National Park",
    desc: "Approximately 930&sup2;, this park provides protected land for the Royal Bengal tigers, rhinoceros and over 500 bird species",
    img: "chitwan.jpg",
    closestCity:"Sauraha",
},
];
export const getNepalLandmarks = () => {
    return nepalLandmarkList;
};