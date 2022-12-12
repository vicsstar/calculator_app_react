import { atom } from "recoil";

const activeNumberState = atom({
    key: 'activeNumberState',
    default: 0,
});

const resultNumberState = atom({
    key: 'resultNumberState',
    default: null,
});

export {
    activeNumberState,
    resultNumberState,
};
