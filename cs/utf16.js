const utf16chars = [];

const charObject = {}

function printUTF16(){
    for (i=33; i<=126; i++) {
      console.log(String.fromCharCode(i));
      utf16chars.push(String.fromCharCode(i));
      charObject[i] = String.fromCharCode(i);
    }
  }

printUTF16()
console.log(utf16chars);
console.log(charObject)