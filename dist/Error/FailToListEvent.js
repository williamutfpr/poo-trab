"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FailToListEvent extends Error {
    constructor(s) {
        super(s + ", This event dont have a peaple ");
    }
}
exports.default = FailToListEvent;
