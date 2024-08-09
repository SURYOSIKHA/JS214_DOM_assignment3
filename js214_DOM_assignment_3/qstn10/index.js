document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('textInput');
    const resultDiv = document.getElementById('result');

    const updateResult = (message) => {
        resultDiv.textContent = message;
    };

    const countWords = (text) => {
        const words = text.trim().split(/\s+/);
        return words.filter(word => word.length > 0).length;
    };

    const convertToLowercase = (text) => {
        return text.toLowerCase();
    };

    const convertToUppercase = (text) => {
        return text.toUpperCase();
    };

    const searchSubstring = (text, substring) => {
        return text.includes(substring);
    };

    const handleButtonClick = (event) => {
        const action = event.target.id;
        const text = textInput.value;

        if (action === 'countWordsBtn') {
            const wordCount = countWords(text);
            updateResult(`Word Count: ${wordCount}`);
        } else if (action === 'lowerCaseBtn') {
            const lowerText = convertToLowercase(text);
            updateResult(`Lowercase Text: ${lowerText}`);
        } else if (action === 'upperCaseBtn') {
            const upperText = convertToUppercase(text);
            updateResult(`Uppercase Text: ${upperText}`);
        } else if (action === 'searchSubstringBtn') {
            const substring = prompt("Enter the substring to search:");
            const found = searchSubstring(text, substring);
            updateResult(`Substring "${substring}" found: ${found}`);
        }
    };

    document.getElementById('countWordsBtn').addEventListener('click', handleButtonClick);
    document.getElementById('lowerCaseBtn').addEventListener('click', handleButtonClick);
    document.getElementById('upperCaseBtn').addEventListener('click', handleButtonClick);
    document.getElementById('searchSubstringBtn').addEventListener('click', handleButtonClick);
});
