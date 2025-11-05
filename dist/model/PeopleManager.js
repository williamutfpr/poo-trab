"use strict";
// Em um novo arquivo, ex: ./PersonManager.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonManager = void 0;
// Esta classe genérica vai gerenciar uma lista de qualquer tipo <T>
class PersonManager {
    list = [];
    maxSize;
    // O construtor pode receber um limite máximo (como 'maxParticipants')
    constructor(maxSize = null) {
        this.maxSize = maxSize;
    }
    /**
     * Adiciona um item à lista, se não for duplicado e houver espaço.
     */
    add(item) {
        // 1. Verifica se a lista está cheia
        if (this.maxSize !== null && this.list.length >= this.maxSize) {
            return false; // Lista cheia
        }
        // 2. Verifica se já existe
        if (this.list.includes(item)) {
            return false; // Já existe
        }
        // 3. Adiciona
        this.list.push(item);
        return true;
    }
    /**
     * Remove um item da lista.
     */
    remove(item) {
        const index = this.list.indexOf(item);
        if (index !== -1) {
            this.list.splice(index, 1);
            return true;
        }
        return false;
    }
    /**
     * Retorna a lista completa.
     */
    getList() {
        return this.list;
    }
    /**
     * Retorna a contagem atual de itens.
     */
    getCount() {
        return this.list.length;
    }
}
exports.PersonManager = PersonManager;
