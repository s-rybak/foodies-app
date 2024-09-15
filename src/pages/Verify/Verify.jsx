import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {verifyUserEmail} from "../../redux/auth/authOperations";
import {AnimatedIconText} from "components/AnimatedIcon/AnimatedIconText";
import {selectAuthError, selectAuthIsLoading, selectAuthIsVerified} from "../../redux/auth/authSelectors";
import AnimationLoader from "../../components/Loader/AnimationLoader";

export const Verify = () => {
    const {token} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isVerified = useSelector(selectAuthIsVerified);
    const isLoading = useSelector(selectAuthIsLoading);
    const error = useSelector(selectAuthError);

    if (isVerified) {

        setTimeout(() => {
            navigate("/");
        }, 3000);
    }

    useEffect(() => {
        if (token && !isVerified) {
            dispatch(verifyUserEmail(token))
        }
    }, [dispatch, token, isVerified]);


    return <>
        {isLoading && <div style={{textAlign: "center", margin: "20px"}}><AnimationLoader/></div>}
        {isVerified && <AnimatedIconText.Success title={"Verficiation successful!"} message={"Your email has been verified!"} />}
        {error && <AnimatedIconText.Failure title={"Error"} message={error} />}
    </>;
};
