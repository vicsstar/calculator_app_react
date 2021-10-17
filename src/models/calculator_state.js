import { atom } from "recoil";

const leftHandDisplayValue = atom({
    key: 'leftHandDisplayValue',
    default: '0',
});

const rightHandDisplayValue = atom({
    key: 'rightHandDisplayValue',
    default: '',
});

export {
    leftHandDisplayValue,
    rightHandDisplayValue,
};
