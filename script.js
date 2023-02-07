let focusBox = document.getElementById("left-box");
let unfocusBox = document.getElementById("right-box");

function convert() {
    let leftBox = focusBox;
    let rightBox = unfocusBox;
    let unit1 = document.getElementById("unit1");
    let unit2 = document.getElementById("unit2");

    // console.log("converting " + leftBox.value + " " + unit1.value + " -> " + unit2.value);

    if (leftBox.value == '') {
        displayMessage("Insert number!");
    }
    else if (isNaN(parseInt(leftBox.value))) {
        displayMessage("Invalid input!");
    }
    else {
        let newTemp = calculateTemp(unit1.value, unit2.value, parseInt(leftBox.value));
        if (!isNaN(newTemp)) {
            rightBox.value = newTemp;
            displayMessage(`${unit1.value} to ${unit2.value} converted!`)
        } 
    }
}

/**
 * Convert {val} degrees {startUnit} into the equivalent temperature
 * in {endUnit}.
 * 
 * @param startUnit Celsius, Kelvin or Farenheit
 * @param endUnit Celsius, Kelvin or Farenheit
 * @param val degrees
 * @returns 
 */
function calculateTemp(startUnit, endUnit, val) {
    if (startUnit == "Celsius") {
        if (endUnit == "Kelvin") {
            let result = val + 273.15;
            if (result < 0) {
                displayMessage("Less than zero Kelvin!");
                return NaN;
            }
            return result;
        }
        else if (endUnit == "Farenheit") {
            return (val * 9.0/5.0) + 32;
        }
        return val;
    }
    if (startUnit == "Kelvin") {
        if (val < 0) {
            displayMessage("There is no negative Kelvin!");
            return NaN;
        }
        else if (endUnit == "Celsius") {
            return val - 273.15;
        }
        else if (endUnit == "Farenheit") {
            return (val - 459.67) * (9.0/5.0);
        }
        return val;
    }
    if (startUnit == "Farenheit") {
        if (endUnit == "Celsius") {
            return (5.0/9.0) * (val - 32);
        }
        else if (endUnit == "Kelvin") {
            let result = ((val - 32) * (5/9)) + 273.15;
            if (result < 0) {
                displayMessage("Less than zero Kelvin!");
                return NaN;
            }
            return result;
        }
        return val;
    }

    return NaN;
}

function displayMessage(msg) {
    console.log(msg);
    let banner = document.getElementById("notif");
    if (banner.firstChild) {
        banner.firstChild.remove();
    }
    let message = document.createElement("h1");
    message.innerHTML = msg;
    banner.appendChild(message);
}

function leftFocus() {
    focusBox = document.getElementById("left-box");
    unfocusBox = document.getElementById("right-box");
}

function rightFocus() {
    focusBox = document.getElementById("right-box");
    unfocusBox = document.getElementById("left-box");
}