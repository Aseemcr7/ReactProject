import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import ApplyLeave from "./pages/ApplyLeave/ApplyLeave";
import Login from "./pages/Login/Login";

function App() {
    return (
        <Router>
            <Routes>
                if(path == "/Login"){
                    <Route path="/Login" element={<Login />} />
                }else{
                    <Route element={<MainLayout />}>
                        <Route path="/" element={<Navigate to="/dashboard" replace />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/ApplyLeave" element={<ApplyLeave />} />
                    </Route>
                }
            </Routes>
        </Router>
    );
}

export default App;