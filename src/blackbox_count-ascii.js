//const fs = require("fs");

// functions to remove characters from a string
function replaceNonAscii(input, replace) {
    var output = input.replace(/[^\x00-\x7F]/g, replace);
    console.log("Replaced all non-ASCII characters in '" + input + "' with '" + replace +"'")
    return output
}
function removeWhitespace(input) {
    var output = input.replace(/\s+/g, '');
    console.log("Removed all white space characters from '" + input + "'")
    return output
}
function removeLetters(input) {
    var output = input.replace(/\w+/g, '');
    console.log("Removed all letters from '" + input + "'")
    return output
}
function retainLetters(input) {
    var output = input.replace(/\W+/g, '');
    console.log("Removed everything but letters and digits from '" + input + "'")
    return output
}
// function to preprocess an input string by calling other functions
function preprocess(input) {
    var output;
    // remove non ASCII characters
    output = replaceNonAscii(input, '');
    // remove all white space
    // output = removeWhitespace(output);
    // remove everything but letters and digits
    output = retainLetters(output);
    return output
}
// the blackbox function: calling other function
function blackbox() {
    // get the input string from the HTML
    let input = document.getElementById("bb_input").value;
    console.log("Processing '" + input +"'")
    // pre-process the input string
    let processedInput = preprocess(input);
    console.log("Counting characters in '" + processedInput + "'")
    let output = processedInput.length;
    console.log("Output: '" + output + "'")
    // write results to the HTML
    document.getElementById("bb_result_compute").innerText = output;
    document.getElementById("bb_input_preprocessed").innerText = processedInput;
}
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
};

// generate input function
/*function generateInput() {
    fs.readFile("./data/01_novellen_text/20.txt", (err, data) => {
        if (err) throw err;
      
        console.log(data.toString());
      });    
}*/

// attaching the blackbox to a specific button
// generate input button
document.getElementById("bb_button_create_input").addEventListener("click", function() { generateInput(); })
// compute button
document.getElementById("bb_button_compute").addEventListener("click", function(){
    // execute blackbox
    blackbox();
    // show the next button
    this.classList.toggle('hidden');
    document.getElementById('bb_button_input').classList.toggle('hidden');
    // show ouput and hide input
    document.getElementById('bb_div_output').classList.toggle('hidden');
    document.getElementById('bb_div_input').classList.toggle('hidden');
});
// button to show the preprocessed input
document.getElementById("bb_button_input").addEventListener("click", function(){
    // show the next button
    this.classList.toggle('hidden');
    document.getElementById('bb_button_clear').classList.toggle('hidden');
    // show the preprocessed input
    document.getElementById('bb_div_content').classList.toggle('hidden');
});
// clear button
document.getElementById("bb_button_clear").addEventListener("click", function() {
    clear()
    // show the next button
    this.classList.toggle('hidden');
    document.getElementById('bb_button_compute').classList.toggle('hidden');
    // hide output and content
    document.getElementById('bb_div_content').classList.toggle('hidden');
    document.getElementById('bb_div_output').classList.toggle('hidden');
    // show input
    document.getElementById('bb_div_input').classList.toggle('hidden');
});

