import React from 'react';

function Display({value}) {
    return (
        <div className="flex items-center justify-end w-full rounded-lg h-28 bg-display">
            <div className="px-3 text-6xl font-semibold text-white">{value}</div>
        </div>
    );
}

export default Display;