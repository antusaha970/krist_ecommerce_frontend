import { Navigate } from "react-router-dom";
function PrivateRoute({ isLoggedIn, children }) {
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
export default PrivateRoute;
