// Navbar start
document.getElementById('navbar').style.backgroundColor = "#1d3557";
// footer
document.getElementById('footer').style.backgroundColor = "#1d3557";
// originalstring
document.getElementById('original').style.backgroundColor = "#1d3557";

// buttons clears
document.getElementById("clear").onclick = function () {
    document.getElementsByClassName("input").innerHTML = ""
}
document.getElementById("clearoutput").onclick = function () {
    document.getElementById("output").innerHTML = ""
}

// simple alert
function simpleAlert() {
    alert("I 'm an alert")
}

// print my name
function printMyName() {
    let myName = document.getElementById('inputText').value;
    if (myName === "") { 
    alert("Please type your name")
    return;
}
document.getElementById('output').innerHTML = myName
}