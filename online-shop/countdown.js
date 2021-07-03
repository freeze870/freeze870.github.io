const countdown = () =>{
    const countDate = new Date('August 1, 2021 00:00:00') //Month, Day, Year, Hour, Minute, Seconds
    const now = new Date().getTime();
    const gap = countDate - now;

    //calculation of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    //output
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);
    
    document.querySelector('.day').innerText = textDay;
    document.querySelector('.hour').innerText = textHour;
    document.querySelector('.minute').innerText = textMinute;
    document.querySelector('.second').innerText = textSecond;
}

setInterval(countdown, 1);