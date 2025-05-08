function NewComponente(){
    function msg(){
        const elemento = document.getElementById('elemento');
        elemento.innerHTML += '<p>TOP</p>';

    };
    return(
        <>  
            <div>
                <button onClick={msg}>CLIQUE AQUI PARA VER A MENSAGEM</button>
                <div id="elemento"></div>
            </div>
        </>
    )

};

export default NewComponente