import { useState } from 'react'

export default function Conditional() {
    let [valor, setValor] = useState('')
    let valor2;
    if (valor == '') {
        valor2 = "asd"
    }
    if (valor == 'asd'){
        valor2 = 'fff'
    }


    


    return(
        <>
            <div>
                <button onClick={()=> setValor(valor=valor2)}>Descrição</button>
            </div>
            <div>
                <p>{valor}</p>
            </div>
        </>
    )


};