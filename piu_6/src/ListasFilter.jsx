import { times } from './dados.js';
import { useState } from 'react';

export default function ListasFilter() {
    const [selectedTime, setSelectedTime] = useState('');

    const handleSelectChange = (event) => {
        setSelectedTime(event.target.value);
    };

    const renderMessage = () => {
        if (selectedTime === "Botafogo") {
            return `${selectedTime} - Time da Estrela Solitária`;
        }
        if (selectedTime === "Flamengo") {
            return `${selectedTime} - Time do Mengão`;
        }
        if (selectedTime === "Palmeiras") {
            return `${selectedTime} - Time do Verdão`;
        }
        if (selectedTime === "Bahia") {
            return `${selectedTime} - Time do Bahia`;
        }
        return selectedTime;
    };

    return (
        <div>
            <h1>Selecione um time de futebol</h1>

            <select onChange={handleSelectChange} value={selectedTime}>
                <option value="">Selecione um time</option>
                {times.map((time, index) => (
                    <option key={index} value={time}>
                        {time}
                    </option>
                ))}
            </select>

            {selectedTime && (
                <ul>
                    <li
                        style={{
                            fontSize: '36px',
                            backgroundColor: 'black',
                            color: 'white',
                            listStyle: 'none',
                            fontWeight: 'bold',
                            padding: '15px',
                        }}
                    >
                        {renderMessage()}
                    </li>
                </ul>
            )}
        </div>
    );
}