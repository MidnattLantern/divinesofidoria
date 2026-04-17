import "./projectsDNA.scss";

interface IMedia {
    name: string,
    source: string,
    description: string
}

interface IProps {
    projectName: string,
    projectsDNA: IMedia[]
}

function ProjectsDNA({projectName, projectsDNA}: IProps) {
    console.log(projectsDNA.length);

    const itemsDNA = projectsDNA.map((item, index) => {
        return (
            <li key={index}>
                <img src={item.source} alt={item.name} loading="lazy" title={item.name}/>
            </li>
        )
    })

    return (
        <div className="projects-dna">
            <h2>{projectName}'s DNA</h2>
            <p>Follow the timelapse about the making of this project</p>
            <ul>{itemsDNA}</ul>
        </div>
    )
};

export default ProjectsDNA;