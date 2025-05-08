function Escopo (){
    const label = "Clique aqui"
    function handleClick(){
        alert ('ALERTA')

    };
    return (
        <>
            <div>
                <h2>Teste de componentes</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eligendi sequi aperiam assumenda consequuntur incidunt quisquam alias aliquam, libero animi magni qui error recusandae nostrum eos exercitationem, illum mollitia ut.</p>
                
            </div>

            <div>
                <button onClick={()=> console.log('Teste')}>{label}</button>
                <button onClick={handleClick}>Clique</button>
            </div>
        
        
        
        </>
    )
};

export default Escopo