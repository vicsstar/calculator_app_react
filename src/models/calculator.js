import { useState } from "react";
import { useRecoilState } from "recoil";
import actions from "./actions";
import { activeNumberState, resultNumberState } from "./calculator_state";

function useCalculator() {
    const [activeNumber, setActiveNumber] = useRecoilState(activeNumberState);
    const [memoryNumber, setMemoryNumber] = useRecoilState(resultNumberState);
    const [algebraicLetter, setAlgebraicLetter] = useState(null); // / * - + %

    const numberPress = (num) => {
        if (algebraicLetter) {
            if (memoryNumber == null) {
                setMemoryNumber(activeNumber);
                setActiveNumber(num);
            } else {
                setActiveNumber(parseFloat(`${activeNumber}${num}`));
            }
        } else {
            setActiveNumber(activeNumber != null && activeNumber !== 0 ? `${activeNumber}${num}` : num);
        }
    };

    const dispatch = (action) => {
        const currentNumber = parseFloat(activeNumber);

        switch(action) {
            case actions.clear:
                setMemoryNumber(null);
                setActiveNumber(0);
                setAlgebraicLetter(null);
                break;
            case actions.plusMinus:
                if (!Number.isNaN(currentNumber)) {
                    setActiveNumber((currentNumber * -1).toString());
                }
                break;
            case actions.modulo: return setAlgebraicLetter('%');
            case actions.divide: return setAlgebraicLetter('/');
            case actions.multiply: return setAlgebraicLetter('x');
            case actions.subtract: return setAlgebraicLetter('-');
            case actions.add: return setAlgebraicLetter('+');
            case actions.num1: return numberPress(1);
            case actions.num2: return numberPress(2);
            case actions.num3: return numberPress(3);
            case actions.num4: return numberPress(4);
            case actions.num5: return numberPress(5);
            case actions.num6: return numberPress(6);
            case actions.num7: return numberPress(7);
            case actions.num8: return numberPress(8);
            case actions.num9: return numberPress(9);
            case actions.num0: return numberPress(0);
            case actions.point:
                break;
            case actions.calculate:
                const calculator = new Calculator(memoryNumber, activeNumber, algebraicLetter);
                const result = calculator.calculate();

                if (result != null) {
                    setActiveNumber(result);
                    setMemoryNumber(null);
                    setAlgebraicLetter(null);
                }
                break;
            default:
        }
    }

    return {
        activeNumber,
        dispatch,
    };
}

class Calculator {
    constructor(resultNumber, activeNumber, algebraicLetter) {
        this.resultNumber = resultNumber;
        this.activeNumber = activeNumber;
        this.algebraicLetter = algebraicLetter;
    }

    calculate() {
        if (!this.algebraicLetter) return this.resultNumber;

        if (!this.activeNumber) {
            this.activeNumber = this.resultNumber;
        }

        const calc = () => {
            switch(this.algebraicLetter) {
                case 'x':
                    return parseFloat(this.resultNumber) * parseFloat(this.activeNumber);
                case '/':
                    return parseFloat(this.resultNumber) / parseFloat(this.activeNumber);
                case '+':
                    return parseFloat(this.resultNumber) + parseFloat(this.activeNumber);
                case '-':
                    return parseFloat(this.resultNumber) - parseFloat(this.activeNumber);
                case '%':
                    return parseFloat(this.resultNumber) % parseFloat(this.activeNumber);
                default:
                    return 0;
            }
        };
        const result = calc();
        return (result / 1 === 0) ? result : result.toFixed(2);
    }
}

export default useCalculator;
