$(function() {

<<<<<<< HEAD
  // listens for the button to be clicked, and runs the function createAndDisplayFortune
  var showFortuneBtn = document.getElementById('show-fortune-btn');
=======

  let showFortuneBtn = document.getElementById('show-fortune-btn');
>>>>>>> parent of 1751c64... finish

  showFortuneBtn.addEventListener("click", createAndDisplayFortune)



  function createAndDisplayFortune(){
    if(document
      .getElementById("ask").value == null || document.getElementById("ask").value == "")
    {
      alert("I can't reviel your future if you don't ask a question!");
      return false;
    }


    else {
      var fortune = [
        `It is not wise`, `This is not your path`, `Good things are to come`, `The future is cloudy`, `Are you crazy?`, `You are headed in the right direction`, `It is your destiny`, `Turn back now`
      ];

      var resultDiv = document
      .getElementById('result')

      resultDiv.innerHTML = `<h2>Behold Your Fortune</h2><h3>${fortune[Math.floor(Math.random()* fortune.length)]}</h3>`;

    }
  }
});

<<<<<<< HEAD
// Loops through a list of strings in an array
var advertise = ['Behold the Wonder!', 'Uncanny!', 'Beyond Belief!', 'The Truth Will Bewilder!']
var i = 0;  // the index of the current item to show
=======
let advertise = ['Behold the Wonder!', 'Uncanny!', 'Beyond Belief!', 'The Truth Will Bewilder!']
let i = 0;  // the index of the current item to show
>>>>>>> parent of 1751c64... finish

setInterval(function() {            // setInterval makes it run repeatedly
    document
        .getElementById('advertise')
        .innerHTML = advertise[i++];    // get the item and increment
    if (i == advertise.length) i = 0;   // reset to first element if you've reached the end
}, 1000);
