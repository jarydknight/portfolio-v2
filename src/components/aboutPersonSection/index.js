import personData from "../../../data/aboutPerson.json";
import AboutTable from "../aboutTable";

function AboutPersonSection () {
    const aboutPersonText = `Outside of development, I’m drawn to fast-paced competition, whether on the racetrack or through my own fitness pursuits. I love staying active, exploring new ways to challenge myself, and appreciating storytelling in many forms—whether it's through anime, epic sci-fi movies, or immersive travel experiences. I seek out new destinations and cultures, enriching my perspective and finding inspiration in diverse places.`;

    return (
        <div className="grid">
            <p className="my-8">{aboutPersonText}</p>

            <AboutTable data={personData} />
           
        </div>
    )
};

export default AboutPersonSection;