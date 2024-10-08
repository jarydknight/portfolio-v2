import { TagIcon } from "@heroicons/react/24/solid";

function ProjectCard ({project}) {
    return (
        <div className="h-48 w-full rounded-xl">
            <div className="grid md:flex items-center">
                <h2 className="text-xl font-bold mr-2">{project.title}</h2>
                <div className="flex">
                    <TagIcon className="size-4 mr-2 fill-zinc-400" />
                    <p className="text-xs text-zinc-400">{project.tags}</p>
                </div>
            </div>
            <div className="pt-4">
                <p>{project.description}</p>
                <a href={project.githubLink} target="blank">
                    <i className="fa-brands fa-github text-xl mr-4 mt-4"></i>
                </a>
                {project.deployedLink ? <a href={project.deployedLink} target="blank">
                    <i className="fa-solid fa-arrow-up-right-from-square text-xl mt-4"></i>
                </a> : <></>}
            </div>
        </div>
    )
};

export default ProjectCard;