import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectAuthIsSignedIn} from "../../../redux/auth/authSelectors";

export const PrivateRoute = ({component: Component}) => {

    const isAuth = useSelector(selectAuthIsSignedIn);
    console.log(isAuth);
    return isAuth ? <Component/> : <Navigate to="/"/>;
};
export default PrivateRoute;