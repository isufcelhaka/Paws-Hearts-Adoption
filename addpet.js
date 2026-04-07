import { petService } from './PetService.js';

const form = document.getElementById('addPetForm');

if (form) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        
        const formData = new FormData(form);
        const newPetData = Object.fromEntries(formData.entries());

      
        await petService.save(newPetData);

        
        alert('Pet added successfully!');

        
        window.location.href = 'index.html'; 
    });
}