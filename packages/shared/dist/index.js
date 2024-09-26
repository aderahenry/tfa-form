"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TFAForm = exports.validatePhone = exports.validateEmail = exports.validateNotEmptyAndAcceptable = exports.add = void 0;
const add = (a, b) => {
    return a + b;
};
exports.add = add;
const validateNotEmptyAndAcceptable = (value) => value.trim().length > 2;
exports.validateNotEmptyAndAcceptable = validateNotEmptyAndAcceptable;
const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
exports.validateEmail = validateEmail;
const validatePhone = (phone) => /^\+?[0-9]{10,15}$/.test(phone);
exports.validatePhone = validatePhone;
var form_1 = require("./form");
Object.defineProperty(exports, "TFAForm", { enumerable: true, get: function () { return __importDefault(form_1).default; } });
