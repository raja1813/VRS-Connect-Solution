import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./admin/Login";
import Dashboard from "./admin/Dashboard";
import Contacts from "./admin/Contacts";
import Proposals from "./admin/Proposals";
import AdminLayout from "./admin/AdminLayout";
import ProtectedRoute from "./admin/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Login */}

        <Route
          path="/admin/login"
          element={<Login />}
        />

        {/* Protected Admin */}

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route
            path="dashboard"
            element={<Dashboard />}
          />

          <Route
            path="contacts"
            element={<Contacts />}
          />

          <Route
            path="proposals"
            element={<Proposals />}
          />
        </Route>

        {/* Default */}

        <Route
          path="*"
          element={<Login />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;