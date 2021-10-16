import React from 'react';
import Button from './button';
import Display from './display';

function ButtonPanel() {
    return (
        <div className="p-5 rounded-lg w-390 bg-dark">
            <Display value="-15"/>
            <div className="grid grid-cols-4 grid-rows-1 gap-3 mt-2 rounded-lg">
                <Button text="c"/>
                <Button text="+-"/>
                <Button text="%"/>
                <Button text="/"/>
                <Button text="7"/>
                <Button text="8"/>
                <Button text="9"/>
                <Button text="x"/>
                <Button text="4"/>
                <Button text="5"/>
                <Button text="6"/>
                <Button text="-"/>
                <Button text="1"/>
                <Button text="2"/>
                <Button text="3"/>
                <Button text="+"/>
                <Button text="0"/>
                <Button text="."/>
                <Button className="col-span-2 bg-danger hover:bg-danger-accent" text="="/>
            </div>
        </div>
    );
}

export default ButtonPanel;