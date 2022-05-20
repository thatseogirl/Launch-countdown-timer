const countDownDate = new Date("May 28, 2022 12:30").getTime();
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const launchTimer = setInterval(function() {

    // Get today's date and time
    const presentTime = new Date().getTime();
      
    // Find the distance between now and the count down date
    const differenceBetweenPresentTimeAndNow = countDownDate - presentTime;
      
    // Time calculations for days, hours, minutes and seconds
    const daysCal = Math.floor(differenceBetweenPresentTimeAndNow / (1000 * 60 * 60 * 24));
    const hoursCal = Math.floor((differenceBetweenPresentTimeAndNow % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesCal = Math.floor((differenceBetweenPresentTimeAndNow % (1000 * 60 * 60)) / (1000 * 60));
    const secondsCal = Math.floor((differenceBetweenPresentTimeAndNow % (1000 * 60)) / 1000);
      
    // Output the result in an element inner.HTML
    days.innerHTML = "0" + daysCal;
    hours.innerHTML = hoursCal;
    minutes.innerHTML = minutesCal;
    seconds.innerHTML = secondsCal;
      
    // when the count down is over 
    if (distance < 0) {
      clearInterval(launchTimer);
      document.getElementById("expired").innerHTML = "We Have Just Lauched, Shop With Us.";
    }
  }, 1000);