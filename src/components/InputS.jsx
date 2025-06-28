import {useRef, useState} from "react"

const InputS = () => {
    const [nome, setNome] = useState('')
      function mudar(e){
        setNome(e.target.value)
        console.log(nome)
      }

      function teste(v) {
        //console.log(v);
        console.log(128);
      }
    return(
        <>
        <input
        type="text" id="nome" value={nome}
        onChange={mudar}
        />
        <button onClick={teste(128)}>Teste com ()</button>
        <button onClick={teste}>Teste</button>
        <h5>{nome}</h5>
        </>
    )
    
}

export default InputS

    //document.addEventListener("click",(e)=>console.log(e.target))
    //document.addEventListener("click",(e)=>console.log(e.pageX + "-" + e.pageY + "-" + e.screenX))