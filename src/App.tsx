import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import SignInPage from './components/SignInPage';
import SignUpPage from './components/SignUpPage';
import DashboardPage from './components/DashboardPage';
import PrivateRoute from './components/PrivateRoute';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route element={<PrivateRoute element={<DashboardPage />} />} />
          <Route path="/" element={<Navigate to="/signin" />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
