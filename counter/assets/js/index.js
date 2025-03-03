let count = 0;
document.querySelector(".input").value=count;
function increase(){
count++;
document.querySelector(".input").value=count;

}
function decrease(){
    if(count>0){
        count--;
document.querySelector(".input").value=count;

    }
}
function reset(){
    count = 0;
document.querySelector(".input").value=count;

}

document.querySelector(".plus").addEventListener("click",increase);
document.querySelector(".minus").addEventListener("click",decrease);
document.querySelector(".reset").addEventListener("click",reset);

document.addEventListener("keydown",function(event){
    
    if(event.key==="ArrowUp"){
        count++;
        document.querySelector(".input").value=count;
    }
    else if(event.key==="ArrowDown" && count>0){
        count--;
        document.querySelector(".input").value=count;

    }
    else if(event.key==="Enter"){
        count = 0;
        document.querySelector(".input").value=count;
    }
    
})

// stop watch





    let tens = 0;
    let seconds = 0;
    let minutes = 0;

    let appendMinutes = document.querySelector("#minutes");
    let appendSeconds = document.querySelector("#seconds");
    let appendTens = document.querySelector("#tens");
    let startBtn = document.querySelector("#start");
    let stopBtn = document.querySelector("#stop");
    let resetBtn = document.querySelector("#zero");

    let interval;

    const startTimer = () => {
        tens++;

        appendTens.textContent = tens < 10 ? "0" + tens : tens;

        if (tens > 99) {
            seconds++;
            appendSeconds.innerHTML = seconds < 10 ? "0" + seconds : seconds;
            tens = 0;
            appendTens.textContent = "00";
        }

        if (seconds > 59) {
            minutes++;
            appendMinutes.innerHTML = minutes < 10 ? "0" + minutes : minutes;
            seconds = 0;
            appendSeconds.textContent = "00";
        }
    };

   
    startBtn.onclick = () => {
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
    };


    stopBtn.onclick = () => {
        clearInterval(interval);
    };


    resetBtn.onclick = () => {
        clearInterval(interval);
        tens = 0;
        seconds = 0;
        minutes = 0;
        appendTens.textContent = "00";
        appendSeconds.textContent = "00";
        appendMinutes.textContent = "00";
    };




