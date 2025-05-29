import {obj} from './dados.js'

export default function ListasObj(){

    const selecionados = obj.filter(selecionado => selecionado.idade > 18)

    return(
        <div>
            <ul>
                {selecionados.map(selecionado => (
                    <li style={{fontSize: '36px'}} key={selecionado.id}>
                        <p>Pessoas maiores que 18 anos são: {selecionado.nome}, sua idade é {selecionado.idade}. Seu id é {selecionado.id}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}