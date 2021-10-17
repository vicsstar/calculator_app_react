class ButtonElement {
    constructor(displayText, {className} = {}) {
        if (!displayText) {
            throw new Error('displayText is required');
        }

        this.displayText = displayText;
        this.className = className;
    }

    handleClick(left, setLeft, right, setRight, algebraicLetter, setAlgebraicLetter) {
        try {
            const currentNumber = parseFloat(left);

            if (Number.isNaN(currentNumber)) return;
    
            switch (this.displayText) {
                case '.':
                    if (!left.includes('.')) setLeft(left + '.');
                    break;
                case '+-':
                    setLeft((currentNumber * -1).toString());
                    break;
                case 'x':
                    setAlgebraicLetter('x');
                    break;
                case '/':
                    setAlgebraicLetter('/');
                    break;
                case '+':
                    setAlgebraicLetter('+');
                    break;
                case '-':
                    setAlgebraicLetter('-');
                    break;
                case '%':
                    setAlgebraicLetter('%');
                    break;
                case 'c':
                    setLeft('0');
                    setRight('');
                    setAlgebraicLetter('');
                    break;
                case '=':
                    const calculator = new Calculator(left, right, algebraicLetter);
                    console.log(left, right, algebraicLetter);
                    setLeft(calculator.calculate());
                    setRight('');
                    break;
                default:
                    if (algebraicLetter) {
                        setRight(!!right ? right + this.displayText : this.displayText);
                    } else {
                        setLeft(currentNumber === 0 && !left.endsWith('.') ? this.displayText : left + this.displayText);
                    }
            }
        } catch(e) {}
    };
}

class Calculator {
    constructor(left, right, algebraicLetter) {
        this.left = left;
        this.right = right;
        this.algebraicLetter = algebraicLetter;
    }

    calculate() {
        if (!this.algebraicLetter) return this.result;

        if (!this.right) {
            this.right = this.left;
        }

        switch(this.algebraicLetter) {
            case 'x':
                return parseFloat(this.left) * parseFloat(this.right);
            case '/':
                return parseFloat(this.left) / parseFloat(this.right);
            case '+':
                return parseFloat(this.left) + parseFloat(this.right);
            case '-':
                return parseFloat(this.left) - parseFloat(this.right);
            case '%':
                return parseFloat(this.left) % parseFloat(this.right);
            default:
                return 0;
        }
    }
}

export default ButtonElement;
