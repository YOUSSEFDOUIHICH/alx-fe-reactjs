import { Navigate } from 'react-router-dom';
import auth from '../auth';

function ProtectedRoute({ children }) {
  return auth.isAuthenticated ? children : <Navigate to="/" />;
}

export default ProtectedRoute;