import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import { RootState } from '../redux/store';

interface PrivateRouteProps {
    element: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
    const { currentUser } = useSelector((state: RootState) => state.user);

    return currentUser ? <Outlet /> : <Navigate to='/signin' />;
};

export default PrivateRoute;
