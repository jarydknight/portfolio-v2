import projects from "../../../data/projects.json";
import ProjectCard from "@/components/projectCard";

function Projects () {
    const aboutProjectsText = `Explore my project showcase, featuring a variety of web applications and software solutions I’ve developed. Each project highlights my skills in frontend design, backend development, API integration, and deployment. From dynamic interfaces to scalable architectures, see how I build efficient, accessible, and user-friendly applications using modern technologies.`;
    
    return (
        <div className="grid px-8 bg-zinc-50/50 dark:bg-black">
            <div className="px-2 md:px-8 xl:px-24">
                <h1 className="text-5xl md:text-6xl py-4 font-bold">Projects I&apos;ve created throughout my coding journey.</h1>
                <p className="py-4 text-large">{aboutProjectsText}</p>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 px-2 md:px-8 xl:px-24 py-8 gap-8">
                {
                    projects.map((project, index) => {
                        return (
                            <ProjectCard project={project} key={index} />
                        )
                    })
                }
            </div>
        </div>
    )
};

export default Projects;