class ButtonElement {
    constructor(displayText, {className} = {}) {
        if (!displayText) {
            throw new Error('displayText is required');
        }

        this.displayText = displayText;
        this.className = className;
    }
}

export default ButtonElement;
