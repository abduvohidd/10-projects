const daysEl = document.querySelector("#days");
const hoursEl = document.querySelector('#hours');
const minsEl = document.querySelector("#mins");
const secondsEl = document.querySelector('#seconds');
const monthEl = document.querySelector('#month');
const weekEl = document.querySelector('#week');



//bu soat hozirgi ketvotgan vaqt

const newYears = "1 Jan 2021";


function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate ) / -1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
    const month = Math.floor(totalSeconds /360) % 12;
    const week = Math.floor(totalSeconds / 3600 / 168);
    console.log(month);
    
    daysEl.innerHTML = (days);
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
    monthEl.innerHTML = formatTime(month);
    weekEl.innerHTML = formatTime(week);

}
function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);










//bu esa teskari sanoq
// const daysEl = document.querySelector("#days");
// const hoursEl = document.querySelector('#hours');
// const minsEl = document.querySelector("#mins");
// const secondsEl = document.querySelector('#seconds');





// const newYears = "1 Jan 2022";


// function countdown(){
//     const newYearsDate = new Date(newYears);
//     const currentDate = new Date();

//     const totalSeconds = (newYearsDate - currentDate) / 1000;

//     const days = Math.floor(totalSeconds / 3600 / 24);
//     const hours = Math.floor(totalSeconds / 3600) % 24;
//     const mins = Math.floor(totalSeconds / 60) % 60;
//     const seconds = Math.floor(totalSeconds) % 60;
    
//     daysEl.innerHTML = (days);
//     hoursEl.innerHTML = formatTime(hours);
//     minsEl.innerHTML = formatTime(mins);
//     secondsEl.innerHTML = formatTime(seconds);

// }
// function formatTime(time){
//     return time < 10 ? `0${time}` : time;
// }

// countdown();

// setInterval(countdown, 1000);