import React from 'react';

function Display({value}) {
    return (
        <div className="flex flex-col items-stretch justify-center w-full rounded-lg h-28 bg-display">
            <div className="mx-3 overflow-hidden text-6xl font-semibold text-right text-white">{value}</div>
        </div>
    );
}

export default Display;
