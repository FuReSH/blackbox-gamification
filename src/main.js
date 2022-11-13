import { blackboxAscii } from './bb_count-ascii.js';
import { blackboxStopwords } from './bb_count-stopwords.js';
import { blackboxSlowsort } from './bb_sort-slowsort.js';
import * as Helper from './helper.js';

// attaching the blackbox to a specific buttons
document.querySelectorAll("#bb_ascii, #bb_stopwords, #bb_slowsort").forEach(el => {
    // generate input button
    el.children[1].children[1].addEventListener("click", function(){
        if (el.id == "bb_slowsort") {
            let randomNums = Helper.generateRandomNumInput(0,200);
            this.previousElementSibling.value = randomNums;
        } else {
            let currentEl = this;
            let text = Helper.generateInputAsync();
            text.then(function(result) {
            currentEl.previousElementSibling.value = result; 
            })
        }               
    });
    // compute button
    el.children[3].children[0].addEventListener("click", function(){
        switch (el.id) {
            case "bb_ascii":
                blackboxAscii();               
            break;
            case "bb_stopwords":
                blackboxStopwords();
            break;
            case "bb_slowsort":
                blackboxSlowsort();
                break;        
            default:
                break;
        }
        // show the next button
        this.classList.toggle('hidden');
        el.children[3].children[1].classList.toggle('hidden');
        // show ouput and hide input
        el.children[2].classList.toggle('hidden');
        el.children[1].classList.toggle('hidden'); 
    });

    // button to show the preprocessed input
    el.children[3].children[1].addEventListener("click", function(){
        // show the next button
        this.classList.toggle('hidden');
        el.children[3].children[2].classList.toggle('hidden');
        // show the preprocessed input
        el.children[4].classList.toggle('hidden');
    });
    // clear button
    el.children[3].children[2].addEventListener("click", function() {
        Helper.clear();
        // show the next button
        this.classList.toggle('hidden');
        el.children[3].children[0].classList.toggle('hidden');
        // hide output and content
        el.children[4].classList.toggle('hidden');
        el.children[2].classList.toggle('hidden');
        // show input
        el.children[1].classList.toggle('hidden');
    });
});
