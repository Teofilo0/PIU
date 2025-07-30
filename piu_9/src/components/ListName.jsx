import {dados} from 'components/dados.js';
import { useState,useEffect } from 'react';

export function ListName({ onSelect }) {
    const [names, setNames] = useState([]);
    
    useEffect(() => {
        const fetchedNames = Object.keys(dados).map(key => ({
        id: key,
        name: dados[key].name
        }));
        setNames(fetchedNames);
    }, []);
    
    return (
        <div>
        <h2>List of Names</h2>
        <ul>
            {names.map(name => (
            <li key={name.id} onClick={() => onSelect(name.id)}>
                {name.name}
            </li>
            ))}
        </ul>
        </div>
    );
    }