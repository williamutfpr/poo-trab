// Em um novo arquivo, ex: ./PersonManager.ts

// Esta classe genérica vai gerenciar uma lista de qualquer tipo <T>
export class PersonManager<T> {
    
    private list: T[] = [];
    private maxSize: number | null;

    // O construtor pode receber um limite máximo (como 'maxParticipants')
    constructor(maxSize: number | null = null) {
        this.maxSize = maxSize;
    }

    /**
     * Adiciona um item à lista, se não for duplicado e houver espaço.
     */
    public add(item: T): boolean {
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
    public remove(item: T): boolean {
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
    public getList(): T[] {
        return this.list;
    }

    /**
     * Retorna a contagem atual de itens.
     */
    public getCount(): number {
        return this.list.length;
    }
}