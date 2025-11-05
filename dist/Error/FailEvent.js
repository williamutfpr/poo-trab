"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FailEvent extends Error {
    constructor(s) {
        super(s + ", musque the root error");
    }
}
exports.default = FailEvent;
