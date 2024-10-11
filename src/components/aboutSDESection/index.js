import AboutTable from "../aboutTable";
import aboutSDEData from "../../../data/aboutSDE.json";

function AboutSdeSection () {
    const aboutSdeText = `I craft dynamic, high-quality web applications by seamlessly integrating frontend and backend technologies. My focus is on creating responsive, accessible user interfaces while building robust and efficient backend systems that ensure seamless performance. With an eye for design and detail, I develop applications that are both visually appealing and functionally sound. Deploying these projects using modern platforms and workflows, I ensure scalability and efficiency, resulting in products that deliver exceptional user experiences across devices.`;

    return (
        <div className="grid">
            <p className="my-8">{aboutSdeText}</p>

            <AboutTable data={aboutSDEData} />
        </div>
    )
};

export default AboutSdeSection;