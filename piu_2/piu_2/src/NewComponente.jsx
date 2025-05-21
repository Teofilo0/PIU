import { useState } from 'react';

function NewComponente() {
    const [contador, setContador] = useState(0);

    function msg() {
        const elemento = document.getElementById('elemento');

        elemento.innerHTML += '<p>TOP</p>';

        const novoContador = contador + 1;
        setContador(novoContador);

        if (novoContador >= 5) {
            elemento.innerHTML += '<p>DEVAGAR PAI</p>';
        }
    }

    return (
        <>
            <div>
                <button onClick={msg}>CLIQUE AQUI PARA VER A MENSAGEM</button>
                <div id="elemento"></div>
            </div>
        </>
    );
}

export default NewComponente;
