import { useEffect, useState } from "react";

function InputBackground() {
    const [color, setColor] = useState("");
    useEffect(() => {
        document.body.style.backgroundColor = color;
    }, [color]);

    return (
        <div className="input-background" >
            <input type="text" onChange={(e) => setColor(e.target.value)} placeholder="Digite uma cor" />
        </div>

    )
};

export default InputBackground;