import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../../states";
import { redirect } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Form from "./Form";
import './index.css'

const LoginPage = () => {
    return (
        <div className="regis-form">
            <Typography
                style={{
                    textAlign: "center"
                }}
            >
                CampusFinders
            </Typography>
            <Typography>
                
            </Typography>
            <Form />
        </div>
    )
}

export default LoginPage