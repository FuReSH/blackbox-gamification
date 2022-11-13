// functions to remove characters from a string
function replaceNonAscii(input, replace) {
    var output = input.replace(/[^\x00-\x7A]/g, replace);
    console.log("Replaced all non-ASCII characters in '" + input + "' with '" + replace +"'");
    return output;
}

// the blackbox function: calling ascii function
function blackboxAscii() {
    // get the input string from the HTML
    let input = document.getElementById("bb_ascii").children[1].firstElementChild.value;
    // remove non ASCII characters
    let processedInput = replaceNonAscii(input, '');
    // count all characters in ascii character set
    let output = processedInput.length;
    console.log("Counting characters in '" + processedInput + "'");
    console.log("Output: '" + output + "'");
    // write results to the HTML
    document.getElementById("bb_ascii").children[2].firstElementChild.firstElementChild.innerText = output;
    document.getElementById("bb_ascii").children[4].firstElementChild.firstElementChild.innerText = input.replace(/[^\x00-\x7A]/g, '\uFFFD');
}

export { blackboxAscii }