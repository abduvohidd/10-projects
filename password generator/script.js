const pwEl = document.querySelector("#pw");
const copyEl = document.querySelector("#copy");
const lenEl = document.querySelector("#len");
const upperEl = document.querySelector("#upper");
const lowerEl = document.querySelector("#lower");
const numberEl = document.querySelector("#number");
const symbolEl = document.querySelector("#symbol");
const generateEl = document.querySelector("#generate");


const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";

function getLowercase(){
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}


function getUpperCase(){
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}


function getNumber(){
    return numbers[Math.floor(Math.random() * numbers.length)];
}


function getSymbol(){
    return symbols[Math.floor(Math.random() * symbols.length)];
}


function generatePassword(){
    const len = lenEl.value;

    let password = "";

    if(upperEl.checked){
        password += getUpperCase();
    }
    if(lowerEl.checked){
        password += getLowercase();
    }
    if(numberEl.checked){
        password += getNumber();
    }
    if(symbolEl.checked){
        password += getSymbol();
    }

    for(let i=0; i<len; i++){
        const x = generateX();
        password += x;
    };

    pwEl.innerHTML = password;
}

function generateX(){
    const xs = [];

    if(upperEl.checked){
        xs.push(getUpperCase())
    }
    if (lowerEl.checked) {
        xs.push(getLowercase());
    }

    if (numberEl.checked) {
        xs.push(getNumber());
    }

    if (symbolEl.checked) {
        xs.push(getSymbol());
    }

    if(xs.length === 0) return "";

    return xs[Math.floor(Math.random() * xs.length)];
}


generateEl.addEventListener('click',generatePassword);

copyEl.addEventListener('click',()=>{
    const textarea = document.createElement('textarea');
    const password = pwEl.innerHTML;

    if(!password){
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert("Password copied to clipboard");
})