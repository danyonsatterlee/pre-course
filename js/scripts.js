$(function() {


  let showFortuneBtn = document.getElementById('show-fortune-btn');

  showFortuneBtn.addEventListener("click", createAndDisplayFortune)


  function createAndDisplayFortune(){

    let fortune = [
      `It is not wise`, `This is not your path`, `Good things are to come`, `The future is cloudy`, `Are you crazy?`, `You are headed in the right direction`, `It is your destiny`, `Turn back now`
    ];

    let resultDiv = document.getElementById('result')

    resultDiv.innerHTML = `<h2>Behold Your Fortune</h2><h3>${fortune[Math.floor(Math.random()* fortune.length)]}</h3>`;

  }
});
