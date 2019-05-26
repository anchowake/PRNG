document.addEventListener('DOMContentLoaded', () => {
  function flip() {
    return Math.random() >= 0.5;
  }
  function randomNumber(n) {
    const min = 0;
    const max = 1000000;
    let randomNumber = 0;
    let seed = 0;
    
    if (n >= max || n <= min) {
      return `The input number must be between: ${min} and ${max}`;
    } else if (n === min + 1) {
      return randomNumber;
    }
    
    function MSWS(seed) {
      let x = seed * seed; // Middle Squares
      let w = seed * Date.now(); // Date.now() to add more salt
      let s = 362437;
      
      x += (w + s); // Weyl Sequence 
      x = String(x);
      
      return x.substring(x.length / 2 - 3, x.length / 2 + 3); // Retrieves the middle values of the sum string
    }
    
    const rngInt = Array.from(new Array(n), () => flip() === true ? 1 : 0)
    .reduce((bitSum, bit) => {
      return bitSum + bit;
    });
    
    seed = MSWS(rngInt);
    randomNumber = Math.floor(seed / max * n);
    
    return randomNumber;
  }
    
  setInterval( () => {
    document.querySelector('.result_a').innerText = randomNumber(1);
    document.querySelector('.result_b').innerText = randomNumber(5);
    document.querySelector('.result_c').innerText = randomNumber(10);
    document.querySelector('.result_d').innerText = randomNumber(50);
    document.querySelector('.result_e').innerText = randomNumber(250);
    document.querySelector('.result_f').innerText = randomNumber(500);
    document.querySelector('.result_g').innerText = randomNumber(1000001);
    document.querySelector('.result_h').innerText = randomNumber(1000000);
  }, 2000);
});