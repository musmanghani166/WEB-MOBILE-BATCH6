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

// variable all cities
let cities = [ 'Faisalabad', 'Lahore', 'Karachi',  'Islamabad', 'Burewala', 'Sheikhupura',  'Kashmir' ]
 



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

// print all cities
function printAllCities(){
    document.getElementById('output').innerHTML = " ";


 for (let i = 0; i < cities.length; i++) {

let num = i + 1;
document.getElementById('output').innerHTML += num + ') ' + cities[i] + '<br/>';

 }

}

// add city into the list
function addCity() {
    let city = document.getElementById('inputText').value;
    if (city === "") { 
    alert("Please type your city name")
    return;
}
cities.push(city);
document.getElementById('output').innerHTML = '<span style="color: green; font-size: 20px;">' + city + '</span> has been successfully added into list .';
}

// generatertable

function generateTable() {
    let number = document.getElementById('inputText').value;
    if(number === ""){
        toastifyError('Please enter a number.');
        return;
    }
    let limit = +prompt('Give a number')
    document.getElementById('output').innerHTML = limit * 7;


}