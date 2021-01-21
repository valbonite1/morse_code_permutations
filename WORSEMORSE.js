//This is basically an algorithm where it takes a piece of morse code as an input
//The catch is the morse code has no delimiters (or spaces) to separate each character
//This causes to have multiple possible translations
//I already have a nested for-loop algorithm 
//I am trying to refactor so it would use recursion instead of for loops. Hahahuhu.

const morseDecoder = (code) => { 

  let decoded = {                   
    '0': ['']
  };

  console.log(count(decoded))
  
  for(let i = 0;  i < code.length; i++) {    
    for (let j = 1; j < 6; j++) { 
      if (!decoded[i + j]) {
        decoded[i + j] = []
      }; 
      
      let curCode = code.slice(i, i + j);
      
      if(dict[curCode]) {
        for(let i_start = 0;i_start < decoded[i].length;i_start++) {
          decoded[i + j].push(decoded[i][i_start] + dict[curCode]);
          
        }
      }
    }
  }
  
  return decoded[code.length];

};



let dict = {
  '.-': 'A',
  '-...': 'B',
  '-.-.': 'C',
  '-..': 'D',
  '.': 'E',
  '..-.': 'F',
  '--.': 'G',
  '....': 'H',
  '..': 'I',
  '.---': 'J',
  '-.-': 'K',
  '.-..': 'L',
  '--': 'M',
  '-.': 'N',
  '---': 'O',
  '.--.': 'P',
  '--.-': 'Q',
  '.-.': 'R',
  '...': 'S',
  '-': 'T',
  '..-': 'U',
  '...-': 'V',
  '.--': 'W',
  '-..-': 'X',
  '-.--': 'Y',
  '--..': 'Z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0'
};