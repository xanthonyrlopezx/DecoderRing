const caesarModule = (function () {
// used ascii table 
// created variable charVal which equalled another variable I created. 
  const charVal = (enc)=>{
//I then created a function which an if statement was done, if variable is less than 97(on ascii table is 'a')
//String.fromCharCode() method converts Unicode values to characters.
    if(enc < 97 )
//It will return a string method containing a variable minus 97 ('a') then adding 123 (above letter z on ascii table)
     return String.fromCharCode((enc - 97)+123)
//Then I created an else if statement with variable is greater than 122('z' on ascii table)    
    else if(enc > 122)
     return String.fromCharCode(enc - 26)
//Will return a string method with variable minus 26(122 - 97)    
    return String.fromCharCode(enc);
  }
//I returned a string method with variable 


function caesar(input, shift, encode = true) {
//Function caesar with parameters input, shift, encode(equals true)
if (shift === 0 || shift < -25 || 
shift > 25) {
//Created an if statement if  shift deeply equals 0 or shift is less than -25 or shift is greater than 25  
    return false
//Returns false
}
    const alpha = input.toLowerCase()
//Created variable to equal parameter  lowercase method
    let c = "";
//Created a variable to an empty string
  for(let i in alpha){
//Added a for loop to let i(index) in variable to interate 
    let cC = alpha.charCodeAt(i)
//Created variable to equal variable string 
//charCodeAt() method returns the Unicode of the character at the specified index in a string
    c += cC <  97 || cC > 122 ? 
//variable c plus equals cC variable is less than 97('a') or cC variable is greater than 122('z')
alpha[i] : encode ?charVal(cC + shift) : charVal(cC - shift)
//variable alpha array of values evaluates parmeter encode(true) if variable charVal(variable cC plus parameter shift) evaluates variable charVal(variable cC minus shift) 
//colon symbol is used to determine the limits of the two expressions inside a ternary operator.
  }
//console.log(input,c,shift,encode)
  return c;
//returns variable c
}
return {
  caesar,
//returns function
};
})();

module.exports = { caesar: caesarModule.caesar };