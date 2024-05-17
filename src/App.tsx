import React from "react";
import { useSelector } from "react-redux";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Login from "./components/Login";
import { isAuthenticated, userRole } from "./redux/slices/authSlice";
import { RoleEnum } from "./types/types";

function App() {
  const isAuthenticatedFlag = useSelector(isAuthenticated);
  const userRoleFlag = useSelector(userRole);

  return (
    <Router>
      <Routes>
        {isAuthenticatedFlag && userRoleFlag === RoleEnum.Admin && (
          <Route path="/admin">
            <Route path="dashboard" element={<div>Dashboard!</div>} />
            <Route path="export" element={<div>Actualizar parametro!</div>} />
          </Route>
        )}
        {isAuthenticatedFlag && userRoleFlag === RoleEnum.Athlete && (
          <Route path="/athlete">
            <Route path="dashboard" element={<div>Agregar parametro!</div>} />
            <Route
              path="add-parameter"
              element={<div>Actualizar parametro!</div>}
            />
            <Route
              path="update-parameter"
              element={<div>Actualizar parametro!</div>}
            />
          </Route>
        )}
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
