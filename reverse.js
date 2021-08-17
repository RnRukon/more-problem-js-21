const text = 'hello how are you ?'

function reverseString(text) {
    let reverse = '';
    for (const letter of text) {

        reverse = letter + reverse;
    }
    return reverse;
}
console.log(reverseString(text));