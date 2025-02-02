function gay_cipher(in_txt) {
    const cipher = {'0': '9', '1': '0', '2': '7', '3': '2', '4': '3', '5': '1', '6': '4', '7': '8', '8': '5', '9': '6', I: 'A', K: 'B', D: 'C', Y: 'D', T: 'E', O: 'F', J: 'G',  E: 'H', L: 'I', U: 'J', G: 'K', Z: 'L', A: 'M', W: 'N', H: 'O', M: 'P', F: 'Q', P: 'R', N: 'S', V: 'T', S: 'U', X: 'V', R: 'W', C: 'X', B: 'Y', Q: 'Z', n: 'a', l: 'b', p: 'c', r: 'd', w: 'e', t: 'h', u: 'i', y: 'j', e: 'k', c: 'l', z: 'm', q: 'n', k: 'o', f: 'p', h: 'q', v: 'r', 'b': 's', 'x': 't', 'g': 'u', 'a': 'v', 's': 'w', 'i': 'x', 'd': 'y', 'o': 'z', j:'f', 'm':'g'};
    
    const keys = Object.keys(cipher);
    
    let out_txt = ""
    
    for (let letter of in_txt) {
        if (keys.includes(letter)) {
            out_txt += cipher[letter]
        } else {
            out_txt += letter
    }
    }
    return out_txt
}
