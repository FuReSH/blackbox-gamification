import * as MyBB from './blackbox_count-ascii.js'


// attaching the blackbox to a specific button
// generate input button
document.getElementById("bb_button_create_input").addEventListener("click", function() {
    /*let blackbox = document.getElementById("bb_button_create_input").parentElement();
    switch (key) {
        case value:
            
            break;
    
        default:
            break;
    }*/
    MyBB.generateInputAsync();

});
// compute button
document.getElementById("bb_button_compute").addEventListener("click", function(){
    // execute blackbox
    MyBB.blackbox();
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
    MyBB.clear();
    // show the next button
    this.classList.toggle('hidden');
    document.getElementById('bb_button_compute').classList.toggle('hidden');
    // hide output and content
    document.getElementById('bb_div_content').classList.toggle('hidden');
    document.getElementById('bb_div_output').classList.toggle('hidden');
    // show input
    document.getElementById('bb_div_input').classList.toggle('hidden');
});