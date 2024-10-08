import projects from "../../../data/projects.json";
import ProjectCard from "@/components/projectCard";

function Projects () {
    return (
        <div className="grid px-8">
            <div className="xl:px-24">
                <h1 className="text-5xl md:text-6xl py-4 font-bold">Projects I've created throughout my coding journey</h1>
                <p className="py-4 text-large">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius pharetra commodo. Suspendisse vulputate tincidunt tortor sed porttitor. Sed at enim at nisl ornare gravida. Ut ut arcu scelerisque mauris eleifend condimentum.</p>
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