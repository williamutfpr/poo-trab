export default class Event {
    constructor(name, time, maxParticipants, currentParticipants, field) {
        this.name = name;
        this.time = time;
        this.maxParticipants = maxParticipants;
        this.field = field;
        this.list = [];
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getTime() {
        return this.time;
    }
    setTime(time) {
        this.time = time;
    }
    getMaxParticipants() {
        return this.maxParticipants;
    }
    setMaxParticipants(maxParticipants) {
        this.maxParticipants = maxParticipants;
    }
    getCurrentParticipants() {
        return this.list.length;
    }
    getField() {
        return this.field;
    }
    setField(field) {
        this.field = field;
    }
    getList() {
        return this.list;
    }
    setList(list) {
        this.list = list;
    }
    addParticipant(p) {
        if (this.list.length < this.maxParticipants) {
            this.list.push(p);
            console.log(`Participante adicionado ao evento ${this.name} com sucesso!`);
        }
        else {
            console.log(`Não foi possível entrar em ${this.name}, número máximo atingido!`);
        }
    }
    toString() {
        return `${this.name} - ${this.time.toLocaleString()} | Participantes: ${this.list.length}/${this.maxParticipants}`;
    }
}
