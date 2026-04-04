import { petService } from './PetService.js';

const form = document.getElementById('addPetForm');

if (form) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // 1. Collect data from the form fields
        const formData = new FormData(form);
        const newPetData = Object.fromEntries(formData.entries());

        // 2. Wait for the Service to save the data to LocalStorage
        await petService.save(newPetData);

        // 3. Feedback for the user
        alert('Pet added successfully!');

        // 4. Redirect back to the Dashboard (index.html)
        window.location.href = 'index.html'; 
    });
}