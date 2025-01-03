import React from "react";
import { Link, Route, BrowserRouter as Router, Routes, Navigate, useLocation } from "react-router-dom";
import styles from "./App.module.css";
import AdminPage from "./modules/Admin/AdminPage";
import UserPage from "./modules/User/UserPage";

const App = () => {
  const location = useLocation(); // Get the current location
  const { pathname } = location;

  return (
    <div className={styles.appContainer}>
      {/* Left vertical panel */}
      <div className={styles.sidePanel}>
        <Link to="/admin" className={`${styles.sideLink} ${pathname === '/admin' ? styles.activeLink : ''}`}>
          <h2 className={styles.label}>Admin</h2>
        </Link>
        <Link to="/user" className={`${styles.sideLink} ${pathname === '/user' ? styles.activeLink : ''}`}>
          <h2 className={styles.label}>User</h2>
        </Link>
      </div>

      {/* Main content area */}
      <div className={styles.mainContent}>
        {/* Define the routes */}
        <Routes>
          {/* Default route to redirect to /user */}
          <Route path="/" element={<Navigate to="/user" />} />

          {/* Admin and User routes */}
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/user" element={<UserPage />} />
        </Routes>
      </div>
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
