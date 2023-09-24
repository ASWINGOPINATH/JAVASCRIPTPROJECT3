function generateRandom(maxLimit = 100){
    let rand = Math.random() * maxLimit;
    console.log(rand); // say 99.81321410836433
  
    rand = Math.floor(rand); // 99
  
    return rand;
  }
  generateRandom(); // 43
  generateRandom(500); // 165