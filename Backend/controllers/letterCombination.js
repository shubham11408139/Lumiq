  function lettterCombinations(req , res) {
      const digits =   req.query.code;
    if(!digits.length) return [];
    let superHeroes = ['SUPERMAN', 'THOR', 'ROBIN',
    'IRONMAN', 'GHOSTRIDER', 'CAPTAINAMERICA',
    'FLASH','WOLVERINE','BATMAN', 'HULK', 'BLADE',
    'PHANTOM', 'SPIDERMAN', 'BLACKWIDOW', 'HELLBOY', 'PUNISHER'
    ]
    const map = {
        0 : [],
        1 : [],
        2: ['A', 'B', 'C'],
        3: ['D', 'E', 'F'],
        4: ['G', 'H', 'I'],
        5: ['J', 'K', 'L'],
        6: ['M', 'N', 'O'],
        7: ['P', 'Q', 'R', 'S'],
        8: ['T', 'U', 'V'],
        9: ['W', 'X', 'Y', 'Z'],
    }
    
    const result = [];
    
    function permute(str, idx) {
      // console.log("check:", str , idx)

        if(idx === digits.length) {
            result.push(str);
            return;
        }
        
        for(let alpha of map[digits[idx]]) {
        //   console.log("alpha is:", idx)
            permute(str+alpha, idx+1);
        }
    }
    permute('', 0);
 
for(let hero of superHeroes){
    if(result.includes(hero)){
      return hero;
    }
  }
 
};


module.exports = {lettterCombinations}

