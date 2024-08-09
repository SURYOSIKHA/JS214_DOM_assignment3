// script.js

// Function to calculate the length of the text excluding spaces
function calculateLength() {
    // Get the text input value
    const text = document.getElementById('textInput').value;
    
    // Calculate the length excluding spaces
    const lengthWithoutSpaces = text.replace(/\s+/g, '').length;
    
    // Display the result
    document.getElementById('result').textContent = lengthWithoutSpaces;
}

// Add event listener to the button
document.getElementById('calculateButton').addEventListener('click', calculateLength);
