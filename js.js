var INPUT = document.getElementById("INP");
var OUTPUT = document.getElementById("OUT")
var INVENTORY = document.getElementById("INV")
var allInInv = [];

var hasRing = false;

var validCommands = [

    ["use", ["use", "combine"], 2, "use(x[1], x[2]);", "use {object1} {object2}"],
    // open = [ALLOWED PHRASE], AMOUNT OF PARAMETERS
    ["open", ["open", "look inside",], 1, "open(x[1]);", "open {container}"],
    ["close", ["close", "shut"], 1, "close(x[1]);", "close {container}"],
    // take [ALLOWED PHRASE], AMOUNT OF PARAMETERSS
    ["take", ["take", "grab", "get"], 2, "take(x[1], x[2])", "take {object} {container}"],
    ["store", ["put", "drop", "leave"], 2, "store(x[1], x[2])", "store {object} {container}"],
    ["examine", ["look"], 1, "examine(x[1]);", "examine {anything}"],
    ["clear", [null], 0, "clearOut();", "clear"],
    ["go", ["move", "travel"], 1, "go(x[1]);", "go {direction}"],
    ["help", ["help", "commands"], 0, "updateOut(help());", "help"]
];

INPUT.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        INPUT.value.toLowerCase();
        allInputs.push(INPUT.value);
        inputOn = -1;
        doCommand(INPUT.value);
        INPUT.value = "";
    };

    // up arrow to go to previous command
    if (event.keyCode === 38) {
        if (inputOn < allInputs.length - 1) {
            inputOn++;
            INPUT.value = allInputs[allInputs.length - inputOn - 1];

        }
    }

    // down arrow to go to next command
    if (event.keyCode === 40) {
        if (inputOn <= allInputs.length - 1 && inputOn > -1) {
            inputOn--;
            if (inputOn == -1) { INPUT.value = ""; } else {
                INPUT.value = allInputs[allInputs.length - 1 - inputOn];
            }
        }
    }

});



