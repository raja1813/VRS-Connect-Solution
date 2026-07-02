import { Navigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

function ProtectedRoute({ children }: Props) {
  const isLoggedIn =
    localStorage.getItem("adminLoggedIn") === "true";

  if (!isLoggedIn) {
    return <Navigate to="/admin/login" replace />;
  }

  return <>{children}</>;
}

export default ProtectedRoute;