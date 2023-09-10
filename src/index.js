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
    // write your solution here
    console.log(expr)
    let morse = ''
    let decode = ''
    for (let i = 0; i<expr.length; i+=10) {
        let number = ''
            for (let j=0; j<10; j++){
                
                number += expr[i +j]
            }

    for (let i=0; i<number.length; i+=2) {
        if(number[i]+number[i+1] === '00') {

        } else if (number[i]+number[i+1]  === '10') {
            morse += '.'
        } else if (number[i]+number[i+1]  === '11') {
            morse += '-'
        } else if (number[i]+number[i+1]  === '**'){
            morse += '**'
        }
    }

    for (let morsekey in MORSE_TABLE) {
        if (morsekey === morse) {
            decode += MORSE_TABLE[morsekey]
            morse = ''
        } else if (morse === '**********'){
            decode += ' '
            morse = ''
        }
    }
    }
    console.log(decode)
   return decode

}

module.exports = {
    decode
}