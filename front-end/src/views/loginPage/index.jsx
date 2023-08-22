import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../../states";
import { redirect, useNavigate } from "react-router-dom";

const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state => state.user);


    return (
        <h3>LoginPage</h3>
    )
}

export default LoginPage