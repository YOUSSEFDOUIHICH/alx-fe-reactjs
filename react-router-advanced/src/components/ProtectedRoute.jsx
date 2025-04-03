import { Navigate } from 'react-router-dom';
import useAuth from "../hooks/useAuth";


function ProtectedRoute({ children }) {
  return useAuth.isAuthenticated ? children : <Navigate to="/" />;
}

export default ProtectedRoute;