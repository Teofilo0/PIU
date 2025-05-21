import { useState } from "react";

export default function Change() {
    const [valor, setValor] = useState(0);

    return (
        <>
            <button onClick={() => setValor(valor + 1)}>+</button>
            <button>{valor}</button>
            {valor > 0 && (
                <button onClick={() => setValor(valor -1)}>-</button>
            )}
        </>
    );
}

