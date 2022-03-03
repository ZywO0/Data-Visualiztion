// This is a SKELETON file for the 'Pig Latin' exercise. It is provided as a
// convenience to get you started writing code faster. If you prefer a different approach you are welcome to modify the file content
// the displayPigLatin function can be used to test your solution.
//

const VOWELS = ['a', 'e', 'i', 'o', 'u'];

function translate(message) {
    return message.split(' ').map(translateWord).join(' ');
}

// complete the code
function translateWord(word) {
    for(var i = 0; i < word.length; i++) {
        // complete the code
        if(VOWELS.indexOf(word[i]) !== -1) break;
        if(word.slice(0,2) == 'qu') {
            i += 2;
            break;
        }


    }
    return word.slice(i) + word.slice(0, i) + 'ay';
}

function displayPigLatin() {
    var _p = document.createElement("p"); // Create a <p> element
    // Get the pigLatin translation and add it to the <text> node
    var pigLatin = translate('apple');
    if (pigLatin !== 'appleay')
        pigLatin = 'Incorrect'

    var _text = document.createTextNode("Pig Latin translation " +
        pigLatin);
    _p.appendChild(_text); // Add the created <text> node to the <p> element

    document.body.appendChild(_p); // Add the created <p> element to <body>

    _p = document.createElement("p");
    pigLatin = translate('ear');
    if (pigLatin !== 'earay')
        pigLatin = 'Incorrect'

    _text = document.createTextNode("Pig Latin translation " +
        pigLatin);
    _p.appendChild(_text); // Add the created <text> node to the <p> element
    document.body.appendChild(_p); // Add the created <p> element to <body>

    _p = document.createElement("p");
    pigLatin = translate('queen');
    if (pigLatin !== 'eenquay')
        pigLatin = 'Incorrect'

    _text = document.createTextNode("Pig Latin translation " +
        pigLatin);
    _p.appendChild(_text); // Add the created <text> node to the <p> element
    document.body.appendChild(_p); // Add the created <p> element to <body>

}

displayPigLatin();