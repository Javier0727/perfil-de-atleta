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
import { AdminLayout } from "./layouts/adminLayout";
import { AthleteLayout } from "./layouts/athleteLayout";
import AdminDashboardPage from "./components/admin/dashboard";
import AthleteDashboardPage from "./components/athlete/dashboard";

function App() {
  const isAuthenticatedFlag = useSelector(isAuthenticated);
  const userRoleFlag = useSelector(userRole);

  return (
    <Router>
      <Routes>
        {isAuthenticatedFlag && userRoleFlag === RoleEnum.Admin && (
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<AdminDashboardPage />} />
            <Route
              path="export"
              element={<div>Exportar perfiles de atleta!</div>}
            />
          </Route>
        )}
        {isAuthenticatedFlag && userRoleFlag === RoleEnum.Athlete && (
          <Route path="/athlete" element={<AthleteLayout />}>
            <Route path="dashboard" element={<AthleteDashboardPage />} />
            <Route
              path="add-parameter"
              element={<div>Añadir parametro!</div>}
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
