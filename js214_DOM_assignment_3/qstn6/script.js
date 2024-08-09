// script.js

// Function to update the image based on selected animal
function updateImage() {
    const animalSelect = document.getElementById('animalSelect');
    const animalImage = document.getElementById('animalImage');
    
    const selectedAnimal = animalSelect.value;
    animalImage.src = `images/${selectedAnimal}.jpg`;
}

// Add event listener to dropdown
document.getElementById('animalSelect').addEventListener('change', updateImage);
