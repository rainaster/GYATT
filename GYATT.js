var inputText;
var outputText;

function convertText() {
    inputText = document.getElementById('inputText').value;
    output = gay_cipher(inputText); // Assuming this function returns the converted text
    // Now, set the value of the outputText textarea to the 'output' variable
    document.getElementById('outputText').value = output;
}


function gay_cipher(in_txt) {
    const cipher = {'0': ['9', 'ª'], '1': ['0', '¡'], '2': ['7', '¨'], '3': ['2', '£'], '4': ['3', '¤'], '5': ['1', '¢'], '6': ['4', '¥'], '7': ['8', '©'], '8': ['5', '¦'], '9': ['6', '§'], I: ['A', '«'], K: ['B', '¬'], D: ['C', '®'], Y: ['D', '¯'], T: ['E', 'Ø'], O: ['F', 'Ù'], J: ['G', 'Ú'],  E: ['H', 'Û'], L: ['I', 'Ü'], U: ['J', 'Ý'], G: ['K', 'Þ'], Z: ['L', 'ß'], A: ['M', 'à'], W: ['N', 'á'], H: ['O', 'â'], M: ['P', 'ã'], F: ['Q', 'ä'], P: ['R', 'å'], N: ['S', 'æ'], V: ['T', 'ç'], S: ['U', 'è'], X: ['V', 'é'], R: ['W', 'ê'], C: ['X', 'ë'], B: ['Y', 'ì'], Q: ['Z', 'í'], n: ['a', 'î'], l: ['b', 'ï'], p: ['c', 'ð'], r: ['d', 'ñ'], w: ['e', 'ò'], j: ['f', 'ó'], 'm': ['g', 'ô'], t: ['h', 'õ'], u: ['i', 'ö'], y: ['j', 'ù'], e: ['k', 'ú'], c: ['l', 'û'], z: ['m', 'ü'], q: ['n', 'ý'], k: ['o', 'þ'], f: ['p', 'ÿ'], h: ['q', 'Ā'], v: ['r', 'ā'], 'b': ['s', 'Ă'], 'x': ['t', 'ă'], 'g': ['u', 'Ą'], 'a': ['v', 'ą'], 's': ['w', 'Ć'], 'i': ['x', 'ć'], 'd': ['y', 'Ĉ'], 'o': ['z', 'ĉ']};
    
    const keys = Object.keys(cipher);
    
    let out_txt = "";

    let counter = 0;
    
    for (let letter of in_txt) {
        if (keys.includes(letter)) {
            out_txt += cipher[letter][counter % 2];
            counter += 1;
        } else {
            out_txt += letter;
    }
    }
    out_txt = "<span class=\"GayArialMT\">" + out_txt + "</span>";
    return out_txt;
}

function showProduct() {
    return out_txt;
}