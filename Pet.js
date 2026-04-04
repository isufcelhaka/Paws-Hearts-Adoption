export class Pet {
    constructor(data) {
        this.id = data.id || Date.now();
        this.name = data.name;
        this.type = data.type;
        this.breed = data.breed;
        this.age = data.age;
        this.status = data.status || 'Available';
    }
}