import { Pet } from './Pet.js';

class PetService {
    constructor() {
        this.storageKey = 'paws_hearts_data';
    }

    async fetchAll() {
        return new Promise((resolve) => {
            const data = JSON.parse(localStorage.getItem(this.storageKey)) || [];
            setTimeout(() => resolve(data), 200);
        });
    }

    async save(petData) {
        return new Promise(async (resolve) => {
            const pets = await this.fetchAll();
            const newPet = new Pet(petData);
            pets.push(newPet);
            localStorage.setItem(this.storageKey, JSON.stringify(pets));
            setTimeout(() => resolve(newPet), 400);
        });
    }
}

export const petService = new PetService();