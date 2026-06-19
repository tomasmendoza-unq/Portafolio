import { Sidebar } from "./components/Sidebar";

export const HomeLayout = ({ children }) => {
    return (
        <>
            <Sidebar />
            {children}
        </>
    );
};
