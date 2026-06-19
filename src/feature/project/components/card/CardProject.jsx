import { Tag } from "../tags/Tags";
import "./style/CardProject.css";

export const CardProject = ({
    srcImg,
    altText,
    tags,
    linkDemo,
    linkRepo,
    nameProject,
    descriptionProject,
}) => {
    return (
        <article className="project-card">
            <img
                src={srcImg}
                alt={altText}
                className="project-img"
            />
            <h3>{nameProject}</h3>
            <p>{descriptionProject}</p>
            <div className="project-tags">
                {tags.map((tag, index) => (
                    <Tag
                        name={tag}
                        key={index}
                    />
                ))}
            </div>
            <div className="project-links">
                <a
                    href={linkDemo}
                    target="_blank"
                >
                    Ver Demo
                </a>
                <a
                    href={linkRepo}
                    target="_blank"
                >
                    Repo
                </a>
            </div>
        </article>
    );
};
