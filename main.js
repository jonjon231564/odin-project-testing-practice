function capitalize(string) {
    return string.toUpperCase()
}

function reverseString(string) {
    
    return string.split('').reverse().join('');
}

let calculator = {
    add(a, b) {
        return a + b
    },
    subtract(a, b) {
        return a - b
    },
    multiply(a, b) {
        return a * b
    },
    divide(a, b) {
        return a / b
    }
}

function caesarCipher(str, num) {
    let stringArray = str.split('')
    for(let i = 0; i < stringArray.length; i++) {
        stringArray[i] = stringArray[i].charCodeAt(0)
        if (stringArray[i] > 98 && stringArray[i] < 123) {
            stringArray[i] = stringArray[i] + num
            if(stringArray[i] > 123) {
                stringArray[i] = stringArray[i] - 26
            }
        } else if(stringArray[i] > 64 && stringArray[i] < 91) {
            stringArray[i] = stringArray[i] + num
            if(stringArray[i] > 91) {
                stringArray[i] = stringArray[i] - 26
            }
        }
        stringArray[i] = String.fromCharCode(stringArray[i])
    }
    return stringArray.join('')
}

function analyzeArray(array) {
    array = array.sort((a, b) => a - b)
    let average = 0
    for (let i = 0; i < array.length; i++) {
        average += array[i]
    }
    average = average / array.length
    return {
        average: average,
        min: array[0],
        max: array[array.length - 1],
        length: array.length
     };
}

module.exports = { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
