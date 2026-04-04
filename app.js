import { petService } from './PetService.js';

const tableBody = document.getElementById('petsTableBody');
const totalCountEl = document.getElementById('totalCount');

const renderDashboard = async () => {
    const pets = await petService.fetchAll();

    if (totalCountEl) {
        totalCountEl.innerText = pets.length;
    }

    if (tableBody) {
        tableBody.innerHTML = '';

        if (pets.length === 0) {
            tableBody.innerHTML = '<tr><td colspan="3">No pets added yet.</td></tr>';
            return;
        }

        pets.forEach(pet => {
            const row = `
                <tr>
                    <td>${pet.name}</td>
                    <td>${pet.type}</td>
                    <td>${pet.breed}</td>
                </tr>
            `;
            tableBody.insertAdjacentHTML('beforeend', row);
        });
    }
};

document.addEventListener('DOMContentLoaded', renderDashboard);