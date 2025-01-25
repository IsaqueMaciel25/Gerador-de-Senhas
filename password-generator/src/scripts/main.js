function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols) {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';
    
    let characterPool = '';
    if (includeUppercase) characterPool += uppercaseChars;
    if (includeLowercase) characterPool += lowercaseChars;
    if (includeNumbers) characterPool += numberChars;
    if (includeSymbols) characterPool += symbolChars;

    if (characterPool.length === 0) return '';

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = getRandomInt(0, characterPool.length);
        password += characterPool[randomIndex];
    }

    return password;
}

document.getElementById('generate-btn').addEventListener('click', () => {
    const length = parseInt(document.getElementById('length-input').value);
    const includeUppercase = document.getElementById('uppercase-checkbox').checked;
    const includeLowercase = document.getElementById('lowercase-checkbox').checked;
    const includeNumbers = document.getElementById('numbers-checkbox').checked;
    const includeSymbols = document.getElementById('symbols-checkbox').checked;

    const password = generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols);
    document.getElementById('password-output').textContent = password;
});