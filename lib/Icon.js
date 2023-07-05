"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("remixicon/fonts/remixicon.css");
const Icon = ({ size = 20, color = 'black', icon }) => {
    return (react_1.default.createElement("div", { style: { fontSize: `${size}px`, color } },
        react_1.default.createElement("i", { className: `ri-${icon}` })));
};
exports.default = Icon;
//# sourceMappingURL=Icon.js.map