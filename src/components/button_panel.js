import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import ButtonElement from '../models/button_element';
import {leftHandDisplayValue, rightHandDisplayValue} from '../models/calculator_state';
import Button from './button';
import Display from './display';

const displayTexts = ['c', '+-', '%', '/', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

function ButtonPanel() {
    const [left, setLeft] = useRecoilState(leftHandDisplayValue);
    const [right, setRight] = useRecoilState(rightHandDisplayValue);
    const [algebraicLetter, setAlgebraicLetter] = useState(''); // / * - + %

    return (
        <div className="p-5 rounded-lg w-390 bg-dark">
            <Display value={right || left}/>
            <div className="grid grid-cols-4 grid-rows-1 gap-3 mt-2 rounded-lg">
                {displayTexts.map((dt, idx) => {
                    const be = new ButtonElement(dt,
                        { className: dt === '=' ? 'col-span-2 bg-danger hover:bg-danger-accent': '' },
                    );
                    return (
                        <Button key={dt + idx}
                            text={be.displayText}
                            className={be.className}
                            onClick={() => be.handleClick(left, setLeft, right, setRight, algebraicLetter, setAlgebraicLetter)}/>
                    );
                })}
            </div>
        </div>
    );
}

export default ButtonPanel;