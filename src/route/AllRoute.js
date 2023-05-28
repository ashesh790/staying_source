import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../component/index/Home";
const AllRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AllRoute; 