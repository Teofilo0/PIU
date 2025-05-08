import { useState } from "react"

function PrimeiroTeste (){
    const nome = "Teófilo Calixto"
    const [contador, setCount] = useState(1)

    return (
        <>
            <div>
                <h1>Ola, me chamo {nome}</h1>
            </div>
            <div>
            <button onClick={() => setCount((contador) => contador + 1)}>
            contador {contador}
            </button>
            </div>

        </>
    )
};

export default PrimeiroTeste