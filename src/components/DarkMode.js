import React from 'react';
import useDarkMode from 'use-dark-mode';
import "./DarkMode.css"


const DarkMode = () => {
    const darkMode = useDarkMode(true);

    return (
        <div className="btn-group darkness" role="group" aria-label="Basic example">
            <button type="button" className="btn-secondary" onClick={darkMode.disable}>
                ☀
            </button>

            <button type="button" className="btn-secondary" onClick={darkMode.enable}>
                ☾
            </button>
        </div>
    );
};

export default DarkMode;