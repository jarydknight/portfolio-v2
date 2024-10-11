import Image from "next/image";
import profilePic from "../../../public/images/lewis.jpg";
import Contact from "../contact/index";
import ExperienceSection from "../experience";

function HeroSection () {

    const heroIntroText = `Welcome! I’m Jaryd Knight, a Toronto-based software developer specializing in full-stack web development. I build efficient and scalable solutions using modern technologies like the MERN stack, NextJS, and Tailwind CSS, with expertise in JavaScript, HTML, CSS, SQL, and Python. I’m passionate about creating dynamic, accessible web applications and deploying solutions on platforms like Vercel and Heroku.

    With experience in frontend interfaces, backend architecture, and Agile methodologies, I deliver quality software that provides seamless user experiences. Explore my portfolio to see how I solve problems with creativity and precision, bringing ideas to life through code!`

    return (
        <div className="grid md:grid-cols-2 md:grid-rows-2 p-8 gap-4 bg-zinc-50/50 dark:bg-black">
            
                <div className="order-2 md:order-1">
                    <h1 className="text-5xl py-2 px-4">Jaryd Knight </h1>
                    <h2 className="text-3xl px-4 mb-8">Software Developer</h2>
                    <p className="p-4 whitespace-pre-line">
                        {heroIntroText}
                    </p>
                </div>
                <ExperienceSection />
                <Image src={profilePic} alt="Profile Pic" height={500} width={500} className="rounded-3xl p-4 order-1 md:order-2 justify-self-center md:justify-self-start"/>
                <Contact />
        </div>
    )
};

export default HeroSection;