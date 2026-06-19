import { CardProject } from "../../../project/components/card/CardProject";
import { projects } from "./projects.js";
import "./style/Projects.css";

export const Projects = () => {
    return (
        <section id="projects">
            <h2 className="title-section">Proyectos destacados</h2>

            <div className="projects-section">
                {projects.map((project, index) => (
                    <CardProject
                        key={index}
                        {...project}
                    />
                ))}
            </div>
        </section>
    );
};
