function display(value){
    document.getElementById("h-primary").textContent += value;
}
function clearDisplay(){
    document.getElementById("h-primary").textContent = '\u00A0';
}
function clearLast() {
    var currentDisplay = document.getElementById("h-primary").textContent;
    if (currentDisplay.length > 0) {
        currentDisplay = currentDisplay.slice(0, -1);
        document.getElementById("h-primary").textContent = currentDisplay;
    } else {
        document.getElementById("h-primary").textContent = '\u00A0';
    }
}
function Result() {
    var p = document.getElementById("h-primary").textContent;
    var q;
    try {
        q = eval(p);
    } catch (error) {
        q = "Error";
    }
    document.getElementById("h-primary").textContent = parseFloat(q.toString());
}
