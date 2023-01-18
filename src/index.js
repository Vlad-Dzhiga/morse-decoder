const MORSE_TABLE = {
  '.-':     'a',
  '-...':   'b',
  '-.-.':   'c',
  '-..':    'd',
  '.':      'e',
  '..-.':   'f',
  '--.':    'g',
  '....':   'h',
  '..':     'i',
  '.---':   'j',
  '-.-':    'k',
  '.-..':   'l',
  '--':     'm',
  '-.':     'n',
  '---':    'o',
  '.--.':   'p',
  '--.-':   'q',
  '.-.':    'r',
  '...':    's',
  '-':      't',
  '..-':    'u',
  '...-':   'v',
  '.--':    'w',
  '-..-':   'x',
  '-.--':   'y',
  '--..':   'z',
  '.----':  '1',
  '..---':  '2',
  '...--':  '3',
  '....-':  '4',
  '.....':  '5',
  '-....':  '6',
  '--...':  '7',
  '---..':  '8',
  '----.':  '9',
  '-----':  '0',
};

function decode(expr) {
  let str = '';
  let arr = [];
  for(let i = 0; i < expr.length; i++){
    str += expr[i];
    if(str.length === 10){
        arr.push(str);
        str = '';
    }
  }
  let morse = [];
 for(elem of arr){
     let string = '';
     if(elem[0] + elem[1] == '11'){
         string += '-';
     } else if(elem[0] + elem[1] == '10'){
         string += '.';
     }else if(elem[0] + elem[1] == '00'){
      string += '';
  }
  if(elem[2] + elem[3] == '11'){
      string += '-';
  } else if(elem[2] + elem[3] == '10'){
      string += '.';
  }else if(elem[2] + elem[3] == '00'){
   string += '';
}
if(elem[4] + elem[5] == '11'){
  string += '-';
} else if(elem[4] + elem[5] == '10'){
  string += '.';
}else if(elem[4] + elem[5] == '00'){
string += '';
}
if(elem[6] + elem[7] == '11'){
  string += '-';
} else if(elem[6] + elem[7] == '10'){
  string += '.';
}else if(elem[6] + elem[7] == '00'){
string += '';
}
if(elem[8] + elem[9] == '11'){
  string += '-';
} else if(elem[8] + elem[9] == '10'){
  string += '.';
}else if(elem[8] + elem[9] == '00'){
string += '';
} else if(elem === '**********'){
  string = ' ';
}
morse.push(string);
 }
let preresult = [];
for(let element of morse){
  if(element === ' '){
      preresult.push(element);
  }
  for(let key in MORSE_TABLE){
      if(element == key){
          preresult.push(MORSE_TABLE[key]);
      }
  }
}
let result = '';
preresult.forEach( (elem) => result += elem);
return result;
}

module.exports = {
  decode
}