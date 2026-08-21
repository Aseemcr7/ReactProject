import { Navigate } from 'react-router-dom';
import { useAppContext } from '../context/useAppContext';
import '../assets/Css/Loader.css';
export default function ProtectedRoute({ children }) {

    const { appData, loading } = useAppContext();

    if (loading) {
        return <span className="loader"></span>;
    }

    if (!appData) {
        return <Navigate to="/login" replace />;
    }

    return children;
}