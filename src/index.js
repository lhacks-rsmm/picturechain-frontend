import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Routes>
            <Route index element={<App />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="home" element={<Home />} />
        </Routes>
    </BrowserRouter>
);
