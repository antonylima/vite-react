import React, { useEffect } from "react";
import Navigator from "../routes/Navigator";


const Header = ()=>{
    useEffect(()=>console.log("header"))
    return(
        <header>
            <h1>Logo</h1>
            <Navigator />
        </header>
    )
}

export default Header;