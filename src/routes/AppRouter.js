import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "pages/Login";
import Logout from "pages/Logout";
import DashboardRoutes from "./DashboardRoutes";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/*" element={<DashboardRoutes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
