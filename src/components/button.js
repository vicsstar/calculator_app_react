import React from 'react';

function Button({text, className = '', style = {}}) {
    return (
        <button
            className={`px-horiz py-vert font-semibold text-white text-28 flex justify-center items-center rounded-lg bg-primary hover:bg-primary-accent transition duration-500 ease-in-out ${className}`}
            style={style}>
                {text}
         </button>
    );
}

export default Button;
