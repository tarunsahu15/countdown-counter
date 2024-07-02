const daysEl =  document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');
const quoteEl = document.getElementById('quote');

const api_url = 'https://type.fit/api/quotes';

async function getData(){

    const response = await fetch(api_url);
    const data = await response.json();
    var mx =  data.length;
    var rand = Math.floor(Math.random() * mx);
    console.log(data.length);
    var auth = data[rand].author;
    var content = data[rand].text+"<footer align=right>-"+auth+"</footer>";
    quoteEl.innerHTML = content;
}
getData();
setInterval(getData,30000);


futureDate = null;
function f(){
    futureDate = document.getElementById("myDate").value;
    countdown();
    setInterval(countdown, 1000);
}
function countdown(){
    
    const newfutureDate = new Date(futureDate);
    const currentDate = new Date();

    const totseconds = (newfutureDate - currentDate - 19800000)/1000;

    const days = Math.floor(totseconds/3600/24);
    const hours = Math.floor(totseconds/3600)%24;
    const minutes = Math.floor(totseconds/60)%60;
    const seconds = Math.floor(totseconds)%60;
    
    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
}
function formatTime(time){
    return time<10?`0${time}`:time;
}