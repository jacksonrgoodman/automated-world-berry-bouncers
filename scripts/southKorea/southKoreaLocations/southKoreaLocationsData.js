const southKoreaLandmarksList = [
    {
        name:"Gyeongju",
        desc:"The former capital of the Silla Kingdom.",
        img: "gyeongju.jpg",
        closestCity: "Pohang, SK"
    },
    {
        name:"Seonamsa",
        desc:"A beautiful mountain temple with some 20 historical buildings.",
        img: "seonamsa.jpg",
        closestCity: "Suncheon, SK"
    },
    {
        name:"Buseoksa Temple",
        desc:"This temple contains valuable treasures including the second oldest woodenstructure in South Korea – <em>Muryangsujeon</em> – that was reconstructed in 1376 AD.",
        img: "buseoksa.jpg",
        closestCity: "Yeongju City, SK"  
    }
];
export const getSouthKoreaLandmarks = () => {
    return southKoreaLandmarksList;
}