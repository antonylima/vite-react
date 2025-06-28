import {useEffect, useState} from "react";

export const ElemE = () =>{
//Chamado sempre que o compoente é renderizado
useEffect(()=>console.log("useEffect sem array"))

//cahamo só uma vez
useEffect(()=>{
    document.title = "UseEffect"
    document.body.style.backgroundColor = "lightgrey"
    document.body.style.color = "red"
    console.log("useEffect com array vazio")
},[])

const [n,setn] = useState(0)


useEffect(()=>console.log("useEffect com dependência"),[n])
    return(
        <div>
            <h6>useEffect</h6>
            <button onClick={(e)=>setn(n + 1)}>+</button>
        </div>
    )
}


