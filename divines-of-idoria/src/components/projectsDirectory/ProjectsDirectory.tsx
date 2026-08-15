import { NavLink } from "react-router";
import "./ProjectsDirectory.styles.scss";

interface IProjectDirectory {
    name: string,
    linkTo: string,
    previewImage: string
}

function ProjectsDirectory({
    projectsDirectory
} : {
    projectsDirectory : IProjectDirectory[]
}) {

    return (
        <div className="projects-directory">
            {projectsDirectory.map((project) => (
                <NavLink to={project.linkTo}>
                    <span>{project.name}</span>
                    <img src={project.previewImage} alt={`${project.name} Preview`}/>
                </NavLink>
            ))}
        </div>
    );
};

export default ProjectsDirectory;