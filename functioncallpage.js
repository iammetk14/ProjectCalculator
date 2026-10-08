function getHistory() {
    return document.getElementsById("history-result").innerText;
}
function printHistory(num) {
    document.getElementById("history-result").innerText = num;
}
function getOutput() {
    return document.getElementById("output-result").innerText;
}
function printOutput(num) {
    if (num == "") {
        document.getElementById("output-result").innerText = num;
    }
    else {
        document.getElementById("output-result").innerText = getFormattedNumber(num);
    }
}
function getFormattedNumber(num) {
    if (num == "") {
        return "";
    }
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}
function reverseNumberFormat() {
    return Number(num.replace(/,/g, ''));
}
var operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function () {
        if (this.id == "clear") {
            printHistory = ("");
            printOutput = ("");
        }
        else if (this.id == "backspace") {
            var output = reverseNumberFormat(getOutput()).toString();
            if (output) {
                output = output.substr(0, output.length - 1);
                printOutput(output);
            }
            else {
                var output = getOutput();
                var history = getHistory();
                if (output == "" && history != "") {
                    if (isNaN(history[history.length - 1])) {
                        history = history.substr(0, history.length - 1);
                    }
                }
            }
        }
    })
} 
