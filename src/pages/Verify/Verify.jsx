import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { verifyUserEmail } from "../../redux/auth/authOperations";
import { AnimatedIconText } from "components/AnimatedIcon/AnimatedIconText";

export const Verify = () => {
  const { token } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [success, setSuccess] = useState(null)

  if (token) {
    dispatch(verifyUserEmail(token))
    .then((action) => {
      if (verifyUserEmail.fulfilled.match(action)) {
        setSuccess({
          title: "Verficiation successful!",
          message: `Your email has been verified!`
        });
      }
    }).then(() => {
      setTimeout(() => {
        navigate('/auth/')
      }, 3000)
    });
  }



  return <>
    {success && <AnimatedIconText.Success {...success} />}
  </>;
};
