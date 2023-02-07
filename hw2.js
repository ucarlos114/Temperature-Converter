// Author: Carlos Urbina (ucarlos) 2/7/23

let focusBox = document.getElementById("left-box");
let unfocusBox = document.getElementById("right-box");
let focusUnit = document.getElementById("left-unit");
let unfocusUnit = document.getElementById("right-unit");

function convert() {

    // console.log("converting " + leftBox.value + " " + unit1.value + " -> " + unit2.value);

    if (focusBox.value == '') {
        unfocusBox.value = '';
        displayMessage("Insert number!");
    }
    else if (isNaN(parseInt(focusBox.value))) {
        unfocusBox.value = '';
        displayMessage("Invalid input!");
    }
    else {
        let newTemp = calculateTemp(focusUnit.value, unfocusUnit.value, parseInt(focusBox.value));
        if (!isNaN(newTemp)) {
            unfocusBox.value = newTemp;
            displayMessage(`${focusUnit.value} to ${unfocusUnit.value} converted!`)
        } 
        else {
            unfocusBox.value = '';
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

/**
 * Function to display a message on the banner.
 * @param msg Message to display.
 */
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

/**
 * Function to switch the current "in-focus" variables.
 */
function leftFocus() {
    focusBox = document.getElementById("left-box");
    focusUnit = document.getElementById("left-unit");
    unfocusBox = document.getElementById("right-box");
    unfocusUnit = document.getElementById("right-unit");
}

/**
* Function to switch the current "in-focus" variables.
*/
function rightFocus() {
    focusBox = document.getElementById("right-box");
    focusUnit = document.getElementById("right-unit");
    unfocusBox = document.getElementById("left-box");
    unfocusUnit = document.getElementById("left-unit");
}