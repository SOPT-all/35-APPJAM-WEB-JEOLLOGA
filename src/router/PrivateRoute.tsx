import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  children: ReactNode;
  redirectPath: string;
  state?: { type: 'my' | 'wish' };
}

const PrivateRoute = ({ children, redirectPath, state }: PrivateRouteProps) => {
  const isAuthenticated = localStorage.getItem('accessToken');

  if (!isAuthenticated) {
    return <Navigate to={redirectPath} state={state} replace />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
