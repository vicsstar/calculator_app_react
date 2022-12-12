import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import actions from '../models/actions';
import ButtonElement from '../models/button_element';
import useCalculator from '../models/calculator';
import {activeNumberState, resultNumberState} from '../models/calculator_state';
import Button from './button';
import Display from './display';

const displayTexts = Object.values(actions);

function ButtonPanel() {
    const {activeNumber, dispatch} = useCalculator();

    return (
        <div className="p-5 rounded-lg w-390 bg-dark">
            <Display value={activeNumber}/>
            <div className="grid grid-cols-4 grid-rows-1 gap-3 mt-2 rounded-lg">
                {displayTexts.map((dt, idx) => {
                    const be = new ButtonElement(dt,
                        { className: dt === '=' ? 'col-span-2 bg-danger hover:bg-danger-accent': '' },
                    );
                    return (
                        <Button key={dt + idx}
                            text={be.displayText}
                            className={be.className}
                            onClick={() => dispatch(be.displayText)}/>
                    );
                })}
            </div>
        </div>
    );
}

export default ButtonPanel;