import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "pages/Login";
import Logout from "pages/Logout";
import DashboardRoutes from "./DashboardRoutes";
import { TransactionsProvider } from "context/TransactionsContext";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <TransactionsProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/*" element={<DashboardRoutes />} />
        </Routes>
      </TransactionsProvider>
    </BrowserRouter>
  );
};

export default AppRouter;
