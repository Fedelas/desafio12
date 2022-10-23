//// TIMER 
let hours = 0;
let mins = 0;
let seconds = 0;
let timeInSeconds = 0;
let timeRanking = 0;
let timex

function startTimer() {
  timex = setTimeout(function () {
    seconds++;
    if (seconds > 59) {
      seconds = 0; mins++;
      if (mins > 59) {
        mins = 0; hours++;

        if (hours < 10) { $("#hours").text('0' + hours + ':') } else $("#hours").text(hours + ':');
      }

      if (mins < 10) {
        $("#mins").text('0' + mins + ':');
      }
      else $("#mins").text(mins + ':');
    }
    if (seconds < 10) {
      $("#seconds").text('0' + seconds);
    } else {
      $("#seconds").text(seconds);
    }


    startTimer();
  }, 1000);

  timeInSeconds = hours * 3600 + mins * 60 + seconds;}