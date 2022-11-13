// function to count all token but stopwords
function removeStopwords(input, stopwords) {
    let tokensWithoutStopwords = [];
    let tokens = [];
    let str = input.replace(/[\t\n\r\.\?\!\,\:\;]/gm, " ").split(" ");
    str.map((s) => {
        let trimStr = s.trim();
        if (trimStr.length > 0){
            tokens.push(trimStr);
        }
        if ((trimStr.length > 0) && ((stopwords.indexOf(trimStr) >= 0) == false)) {
            tokensWithoutStopwords.push(trimStr);
        }
    });
    let numOfStopwords = tokens.length - tokensWithoutStopwords.length;
    return [tokensWithoutStopwords, numOfStopwords];
}

async function getStopwordsAsync(arrayData) {
    try {
        const response = await fetch(arrayData);
        const data = await response.json();        
        return data;
    } catch (error) {
        console.log(error);
    }
}

// the blackbox function: calling count function
function blackboxStopwords() {
    // get the input string from the HTML
    let input = document.getElementById("bb_stopwords").children[1].firstElementChild.value;
    //get German stopwords
    let stopwords = getStopwordsAsync('./data/stopwords-de.json');
    stopwords.then(function(result){
        // remove German stopwords
        let processedInput = removeStopwords(input, result);
        // count word tokens
        let output = processedInput[0].length;
        console.log("Counted tokens'" + processedInput[0] + "'")
        console.log("Output: '" + output + "'")
        // write results to the HTML
        document.getElementById("bb_stopwords").children[2].firstElementChild.firstElementChild.innerText = output;
        document.getElementById("bb_stopwords").children[4].firstElementChild.firstElementChild.innerText = "[" + processedInput[0] + "]\n\n" + "num of stopwords: " + processedInput[1];
    });
    
}

export { blackboxStopwords }