// Function that implements Slow Sort (one of the slowest sort algorithms on earth ;-) https://en.wikipedia.org/wiki/Slowsort)
function slowSort(A,i,j) {
    // Base Case
    if (i >= j)
        return; 
    // Middle value
    let m = parseInt((i + j) / 2); 
    // Recursively call with left half
    slowSort(A, i, m); 
    // Recursively call with right half
    slowSort(A, m + 1, j); 
    // Swap if first element
    // is lower than second
    if (A[j] < A[m]) {
        //swapp(A[j], A[m]);
        let t = A[j];
        A[j]=A[m];
        A[m]=t;
    }     
    // Recursively call with whole
    // array except maximum element
    slowSort(A, i, j - 1); 
}
 
// Function to print the array
function printArray(arr, size){
    let i;
    let res = [];
    for (i = 0; i < size; i++) {
        res.push(arr[i]);
    }
    return res;
}

function blackboxSlowsort() {
    // get the input string from the HTML
    let input = (document.getElementById("bb_slowsort").children[1].firstElementChild.value).split(" ");
    let preprocessedInput = []; 
    input.map((str) => {
        preprocessedInput.push(parseInt(str));
    });
    let startTime = Date.now();
    slowSort(preprocessedInput, 0, preprocessedInput.length - 1)
    let endTime = Date.now();
    let duration = Math.abs(startTime - endTime);
    // Display the sorted array
    let output = printArray(preprocessedInput, preprocessedInput.length);
    document.getElementById("bb_slowsort").children[2].firstElementChild.firstElementChild.innerText = output;
    document.getElementById("bb_slowsort").children[4].firstElementChild.firstElementChild.innerText = "// The 'Slowsort'-Algorithm\n\nnum of sorted elements: " + preprocessedInput.length + "\ntime in sec: " + (duration / 1000);
    
}

export { blackboxSlowsort }