import { Navigate } from 'react-router-dom';
import useauth from '../auth';

function ProtectedRoute({ children }) {
  return useauth.isAuthenticated ? children : <Navigate to="/" />;
}

export default ProtectedRoute;