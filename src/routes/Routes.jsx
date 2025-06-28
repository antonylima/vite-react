import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "../pages/Home";
import About from "../pages/About";
import Navigator from "./Navigator";
import LayoutPage from "../layouts/LayoutPage";
import Footer from "../components/Footer";
import Header from "../components/Header";

export const AppRoutes = ()=>{
    /*return(
        <BrowserRouter>
        <Navigator />
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
        </Routes>
        <Footer/>
        </BrowserRouter>
    )*/
   return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<LayoutPage/>} >
            <Route index element={<Home/>} />
            <Route path="/about" element={<About/>} />
            </Route>
        </Routes>
        </BrowserRouter>
    )
}