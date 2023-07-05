"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Icon_1 = __importDefault(require("../../Icon"));
const UserAddLine = ({ size = 20, color = 'black' }) => {
    return (react_1.default.createElement(Icon_1.default, { icon: 'user-add-line', size: size, color: color }));
};
exports.default = UserAddLine;
//# sourceMappingURL=UserAddLine.js.map