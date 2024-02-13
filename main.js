const input = document.querySelector('.input');
const copy = document.querySelector('.copy');
const btn = document.querySelector('.btn')

const length = 12;
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const number = '0123456789';
const symbol = '@#$%&*()_+|}{[]<>/-=';
const allChars = upperCase + lowerCase + number + symbol;



function randomPass() {
    let pass = ``;
    pass += upperCase[Math.floor(Math.random() * upperCase.length)];
    pass += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    pass += number[Math.floor(Math.random() * number.length)];
    pass += symbol[Math.floor(Math.random() * symbol.length)];
    for (let i = pass.length; i < length; i++) {
        pass += allChars[Math.floor(Math.random() * allChars.length)]

    }
    input.value = pass;
}

btn.addEventListener('click', randomPass);
copy.addEventListener('click', function () {
    input.select();
    // document.execCommand('copy');
    navigator.clipboard.writeText(input.value);
    input.value = "";
})