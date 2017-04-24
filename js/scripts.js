$(function() {

  // listens for the button to be clicked, and runs the function createAndDisplayFortune
  let showFortuneBtn = document.getElementById('show-fortune-btn');

  showFortuneBtn.addEventListener("click", createAndDisplayFortune)




  function createAndDisplayFortune(){
    // the input is called "ask" If the input is empty it will pop up with an alert
    if(document
      .getElementById("ask").value == null || document.getElementById("ask").value == "")
    {
      alert("I can't reviel your future if you don't ask a question!");
      return false;
    }

// if input is not empty it will display one of these strings in the array randomly in the div resultDiv.
    else {
      let fortune = [
        `It is not wise`, `This is not your path`, `Good things are to come`, `The future is cloudy`, `Are you crazy?`, `You are headed in the right direction`, `It is your destiny`, `Turn back now`
      ];

      let resultDiv = document
      .getElementById('result')
// this selects a position in the array to choose from. 
      resultDiv.innerHTML = `<h2>Behold Your Fortune</h2><h3>${fortune[Math.floor(Math.random()* fortune.length)]}</h3>`;

    }
  }
});

// Loops through a list of strings in an array
let advertise = ['Behold the Wonder!', 'Uncanny!', 'Beyond Belief!', 'The Truth Will Bewilder!']
let i = 0;  // the index of the current item to show

setInterval(function() {            // setInterval makes it run repeatedly
    document
        .getElementById('advertise')
        .innerHTML = advertise[i++];    // get the item and increment
    if (i == advertise.length) i = 0;   // reset to first element if you've reached the end
}, 1000);
