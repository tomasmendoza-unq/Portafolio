import { useEffect, useState } from "react";
import { links } from "./links";
import "./style/Sidebar.css";

export const Sidebar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <ul>
                {links.map((link) => (
                    <li
                        className="links"
                        key={link.name}
                    >
                        <a href={link.href}>{link.name}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
