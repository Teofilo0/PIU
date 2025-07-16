import { useState,useEffect } from 'react';
export default function CountClick() {
    const [count, setCount] = useState(0);

    function handleClick(count1) {
        const cor  = ["ff0000", "00ff00", "0000ff", "ffff00", "ff00ff", "00ffff","ffffff", "000000","800080", "808080", "800000", "008000", "000080"];
        document.body.style.backgroundColor = `#${cor[count1 % cor.length]}`;
    }
    useEffect(() => {
        handleClick(count);
    }, [count]);

return (
    <>
        <button onClick={()=> setCount(count + 1)} className="btn btn-primary">Click me!</button>
    </>
)
}   