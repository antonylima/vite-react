import React, {useEffect} from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const LayoutPage = ()=>{
    useEffect(()=>console.log("layout"))
    return(
        <>
            <Header />
                <Outlet/>
            <Footer />
        </>
    )
}

export default LayoutPage;