import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import ApplyLeave from "./pages/ApplyLeave/ApplyLeave";
import Login from "./pages/Login/Login";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
    return (
        <Router>
            <Routes>
                    <Route path="/Login" element={<Login />} />
                <Route element={
                    <ProtectedRoute>
                        <MainLayout />
                    </ProtectedRoute>
                    }>                        
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/ApplyLeave" element={<ApplyLeave />} />
                    </Route>
                    <Route path="/" element={<Navigate to="/Login" replace />} />
            </Routes>
        </Router>
    );
}

export default App;