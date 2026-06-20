import "./style/Welcome.css";

export const Welcome = () => {
    return (
        <section
            id="welcome-section"
            className="welcome-section"
        >
            <h1 className="title-section">Hola, soy Tomás Mendoza</h1>
            <p className="welcome-subtitle">
                Backend Developer | Java • Spring Boot • APIs REST
            </p>
            <p className="welcome-bio">
                Estudiante avanzado en la UNQ con orientación backend. Fundador
                de Tempus, una app de horarios universitarios, y NXT_STEPS, una
                plataforma e-commerce en producción.
            </p>
            <p className="welcome-bio">
                Busco oportunidades para asumir desafíos técnicos y aportar
                valor real.
            </p>
            <div className="welcome-actions">
                <a
                    href="#projects"
                    className="btn btn-primary"
                >
                    Ver proyectos
                </a>
                <a
                    href="https://res.cloudinary.com/dvkvlpq07/image/upload/v1781967593/CV_Tomas_Ismael_Mendoza_zgmpev.pdf"
                    download
                    className="btn btn-secondary"
                >
                    Descargar CV
                </a>
            </div>
        </section>
    );
};
