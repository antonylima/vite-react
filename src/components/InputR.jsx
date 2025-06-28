import {useRef, useState} from "react"
const InputR = () => {
    const [n, setn] = useState("")
    const nome = useRef("Ze ")
    //nome.current = ""
    //let novo = "Antonio"
    function mudar(e){
        nome.current = e.target.value
        console.log(nome)
        //novo = nome.current
        //console.log(novo)
    }

    return(
        <> 
        <input
        type="text"
        onChange = {mudar}
        //ref={nome} //Sava todas as propriedades do elemento
        /> 
        <button onClick={(e) => setn(nome.current)}>Mostrar input Ref</button>
        <h5>
        {/*
        {/*nome.current.value*/}
         {nome.current}
        </h5>
        </> 
    )
}
export default InputR