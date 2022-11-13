// helper function: clear all textboxes
function clear() {
    let text = document.getElementsByClassName('to_clear');
    for (let index = 0; index < text.length; index++) {
        const element = text[index];
        if (document.getElementsByTagName("textarea")) {
            element.value = '';
        }
        if (document.getElementsByTagName("textarea")) {
            element.innerText = '';
        }
    }
}

// helper function: generate random input function
async function generateInputAsync() {
    let textData = getRandomText();
    try {
        const response = await fetch(textData);
        const data = await response.text();        
        return data;
    } catch (error) {
        console.log(error);
    }
}

function getRandomText() {
    //let textGenre =
    let firstSentence = Math.floor(Math.random() * 139) + 1;
    return './data/01_novellen_txt/' + firstSentence + '.txt';
}

// helper function: generate array with random int values
function generateRandomNumInput(min, max) {
    const ARRAY_LENGTH = max;
    const randomArray = [];
    for(let i = 0; i < ARRAY_LENGTH; i++) { 
        randomArray.push(Math.floor(Math.random() * (max - min) ) + min);
    } 
    return randomArray;
}

export { clear, generateInputAsync, generateRandomNumInput }