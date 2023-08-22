import React from "react";
import { useSelector } from "react-redux";
import NavBar from "../navbar";

const HomePage = () => {
    const user = useSelector((state) => state.user)
    return (
        <div>
            <NavBar />
            <div>HomePage</div>
        </div>
    )
}

export default HomePage;