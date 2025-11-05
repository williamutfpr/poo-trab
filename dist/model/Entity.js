"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_crypto_1 = require("node:crypto");
class Entity {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    setId() {
        return (0, node_crypto_1.randomInt)(1, 100000000);
    }
}
exports.default = Entity;
