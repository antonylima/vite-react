import React, {useEffect} from "react"; 


const Footer = ()=>{
    useEffect(()=>console.log("footer"))
    return(
        <footer>
            <h1>
                Footer
            </h1>
        </footer>
    )
}

export default Footer;