import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children, useAuth }) {
  return useAuth ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
