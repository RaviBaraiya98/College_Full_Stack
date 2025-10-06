import React from 'react';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from './auth/AuthContext';
import Login from './pages/Login';
import Register from './pages/Register';

function Protected({ children }) {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default function App() {
  const { user, logout } = useAuth();
  return (
    <div className="container">
      <nav className="nav card">
        <Link to="/">Home</Link>
        {!user && <Link to="/login">Login</Link>}
        {!user && <Link to="/register">Register</Link>}
        {user && (
          <button onClick={logout} style={{ marginLeft: 'auto' }}>Logout</button>
        )}
      </nav>

      <div className="card">
        <Routes>
          <Route path="/" element={<Protected><div>Welcome {user?.name}</div></Protected>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </div>
  );
}
