/*export const C2 = () => {
    return(
        <h5>C2</h5>
    )
}



export const C3 = () => {
    return(
        <h5>C3</h5>
    )
}


export const C4 = () => {
    return(
        <h5>C4</h5>
    )
}*/


const C1 = (props) => {
    return(
        <h5>C1 - {props.p1} e {props.p2}</h5>
    )
}



const C2 = (props) => {
    return(
        <h5>C2 - {props.p1} e {props.p2}</h5>
    )
}



const C3 = (props) => {
    return(
    
        <div style={{
            border: "1px red solid"
        }}>
        <h5>
            Dentro do element
        </h5>
        <h5>
            {props.children}
        </h5>
        </div>
        
    )
}


const C4 = ({children}) => {
    return(
        <div style={{
            border: "1px red solid"
        }}>
        <div>
        <h5>Dentro do element</h5>
        </div>
        <h5>
            {children}
        </h5>
        </div>
        
    )
}

const C5 = ({tipo}) => {
    return(
    <div>
        {
        tipo == "A" ? (
            <h5>Sim</h5>
        ) : (
            <h5>Não</h5>
        )
    }
    </div>
    )
}

export {C1,C2,C3,C4,C5}