import { Link } from "react-router-dom";
import { Project } from '../types';

interface ProjectProps {
    project: Project
}

export function Projects({ project }: ProjectProps) {
    return (
        <div className="item D3 col-sm-6 col-md-4 col-lg-4 mb-4">
            <Link to={`${project.img_desc}`} className="item-wrap fancybox">
                <div className="work-info">
                    <h3>{project.chart_type}</h3>
                    <span>{project.topic}</span>
                </div>
                <img className="img-fluid" src={require(`../assets/img/projects/${project.img_path}`)} alt={project.img_desc} />
            </Link>
        </div>
    );
}