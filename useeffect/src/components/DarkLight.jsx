import { useEffect, useState } from "react";
import '../App.css'

function DarkLight() {
    const [darkMode, setDarkMode] = useState(false);
    
    useEffect(() => {
        document.body.className = darkMode ? "dark" : "light";
    }, [darkMode]);
    
    return (
        <div className="dark-light-toggle">
        <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "Light" : "Dark"}
        </button>
        </div>
    );
    }

export default DarkLight;