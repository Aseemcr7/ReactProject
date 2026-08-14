import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import "../assets/Css/Sidebar.css";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <div>
            <Sidebar />
            <Header />

            <main className="main-content">
                <Outlet />
            </main>
        </div>
    );
}