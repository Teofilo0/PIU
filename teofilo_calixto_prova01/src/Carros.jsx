import './index.css';
import './carros.js';
import { carros } from './carros.js';

export default function Carros() {
    return (
        <>  
            
            <div>
                <h1>Carros</h1>
                {/* aqui faz uma listagem de todos os carros, mostrando o modelo e a cor usando o map */}
                {carros.map((carro) => (
                    <div className='car_list' key={carro.modelo}>
                        <p>{carro.modelo}</p>
                        <p>{carro.cor}</p>
                    </div>
                ))}

                <h1>Carros com ano superior a 2019</h1>
                {/* aqui é utilizado filter para fazer a filtragem com os carros que possuem ano superior a 2019 e o map para renderizar o modelo dos carros */}
                {carros.filter((carro) => carro.ano > 2019).map((carro) => (
                    <div className='car_list' key={carro.modelo}>
                        <p>{carro.modelo}</p>
                    </div>
                    ))}
            </div>
        </>
    );
}