import { Contact } from "../components/contact/Contact.jsx";
import { Projects } from "../components/projects/Projects.jsx";
import { Welcome } from "../components/welcome/Welcome";
import { HomeLayout } from "../layout/HomeLayout";

export const Home = () => {
    return (
        <HomeLayout>
            <Welcome />
            <Projects />
            <Contact />
        </HomeLayout>
    );
};
