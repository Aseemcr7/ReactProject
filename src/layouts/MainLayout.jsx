import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { useAppContext } from "../context/useAppContext";
import { Outlet } from "react-router-dom";


export default function MainLayout() {
    const { appData } = useAppContext();
    return (
        <div>
            <Sidebar employeeData={appData} />
            <Header employeeData={appData} />

            <main className="main-content">
                <Outlet />
            </main>
        </div>
    );
}