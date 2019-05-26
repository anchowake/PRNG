document.addEventListener('DOMContentLoaded', () => {
  function flip() {
    return Math.random() >= 0.5;
  }

  function randomNumber(n) {
    const min = 0;
    const max = 1000000;
    let rndNumber = 0;
    
    if (n >= max || n <= min) {
      return `The input number must be between: ${min} and ${max}`;
    } else if (n === min + 1) {
      return rndNumber;
    }
    
    const rngInt = Array.from(new Array(n), () => flip() ? 1 : 0)
    .reduce((bitSum, bit) => bitSum + bit);
    
    // Middle Square Weyl Sequence
    const seed = () => {
        let x = rngInt * rngInt; // Middle Squares
        const w = rngInt * Date.now(); // Date.now() to add more salt
        const s = 362437;
        
        x += (w + s); // Weyl Sequence 
        x = String(x);
        
        return x.substring((x.length / 2) - 3, (x.length / 2) + 3); // Retrieves the middle values of the sum string
    }

    rndNumber = Math.floor((seed() / max) * n);
    
    return rndNumber;
  }
  
  //  Fixed interval for update on the front end
  setInterval( () => {
    document.querySelector('.result_a').innerText = randomNumber(1);
    document.querySelector('.result_b').innerText = randomNumber(500);
    document.querySelector('.result_c').innerText = randomNumber(1000001);
    document.querySelector('.result_d').innerText = randomNumber(500);
  }, 2000);
});