import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ component: Component }) => {
    //TODO: check users token
  return true ? <Component /> : <Navigate to="/" />;
};
export default PrivateRoute;