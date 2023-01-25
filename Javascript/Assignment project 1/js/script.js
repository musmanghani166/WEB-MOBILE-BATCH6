// Navbar start
document.getElementById('navbar').style.backgroundColor = "blue";
document.getElementById('navbar').style.paddingLeft = "10%";
document.getElementById('navbar').style.paddingRight = "10%";

// buttons
let button = document.getElementById("clearstatement");
let box = document.getElementById("statement");
 button.addEventListener("click", function () {
    box.innerHTML = "";
});
let button1 = document.getElementById("clearoutput");
let box1 = document.getElementById("output");
 button.addEventListener("click", function () {
    box.innerHTML = "";
});


// alert button
document.getElementById("alert").onclick = function () {
    alert("Muhammad Usman Ghani")
    let alertstatement = "alert('Muhammad Usman Ghani')"
    document.getElementById("statement").innerHTML = alertstatement;
    document.getElementById("output").innerHTML = "";
}
// alert number
document.getElementById("number").onclick = function () {
    alert("03240266166")
    let alertstatement = "alert('03240266166')"
    document.getElementById("statement").innerHTML = alertstatement;
    document.getElementById("output").innerHTML = "";
}
// alert Variable
document.getElementById("Variable").onclick = function () {
    document.getElementById("statement").innerHTML = "";
    let HTML =  "<ul><li>A variable name can't contain any space</li><li>A varable name contain only letter, number, dollar signs, and underscrores</li><li>Tought a varable can't be any of Javascript's keywords, it can contain keywords. For example, <code>userAlert</code> and <code> myVar</code> are legal.</li><li>Capital letter are fine, but be careful. Vareable name are case sensitive. A <code>rose</code> is not a <code>Rose</code>. If you assign the string 'Floribundas' to the vareable <code>rose</code>, and then ask Javascript for the value assigned to <code>rose</code>, you'll come up empty.</li></ul>"
    document.getElementById("output").innerHTML =  HTML;
}
// alert camelCase
document.getElementById("camelCase").onclick = function () {
    document.getElementById("statement").innerHTML = "";
    let  HTML = "<h3>Example</h3><ul><li><code>user</code></li><li><code>userResponse</code></li><li><code>userResponseTime</code></li><li><code>userResponseTimeLimit</code></li></ul>"
    document.getElementById("output").innerHTML = HTML;
}
// alert  Sum2
document.getElementById("Sum2").onclick = function () {
     
    let num1 = 10
    let num2 = 5
    let sum = num1 + num2

    document.getElementById("output").innerHTML = "<p class='text-center'>"+ sum +"</p>";

    let HTML = "let num1 = " + num1 +  ";<br>let num1 = " + num2 +  ";<br>let sum = num1 + num2 " 
    document.getElementById("statement").innerHTML = HTML;
}
// alert  Subsctract
document.getElementById("Subsctract").onclick = function () {
    let num1 = 10
    let num2 = 5
    let sum = num1 - num2

    document.getElementById("output").innerHTML = "<p class='text-center'>"+ sum +"</p>";

    
    let  statement = "let num1 = " + num1 +  ";<br>let num1 = " + num2 +  ";<br>let sum = num1 - num2 "
    document.getElementById("statement").innerHTML =  statement;
}
// alert  Multiply
document.getElementById("Multiply").onclick = function () {
    let num1 = 10
    let num2 = 5
    let sum = num1 * num2

    document.getElementById("output").innerHTML = "<p class='text-center'>"+ sum +"</p>";
     
    let  statement =  "let num1 = " + num1 +  ";<br>let num1 = " + num2 +  ";<br>let sum = num1 * num2 "
    document.getElementById("statement").innerHTML =  statement;
}
// alert Divide
document.getElementById("Divide").onclick = function () {
    let num1 = 10
    let num2 = 5
    let sum = num1 / num2

    document.getElementById("output").innerHTML = "<p class='text-center'>"+ sum +"</p>";

    let  statement = "let num1 = " + num1 +  ";<br>let num1 = " + num2 +  ";<br>let sum = num1 / num2 "
    document.getElementById("statement").innerHTML =  statement;
}
// alert Calculate
document.getElementById("Calculate").onclick = function () {
     
    let Calculate = 36 / 6 * 3 + 2 ** 4 - (3 + 5);

    document.getElementById("output").innerHTML = "<p class='text-center'>"+ Calculate +"</p>";
     
    let  statement1 = "36 / 6 * 3 + 2 ** 4 - (3 + 5);" 
    document.getElementById("statement").innerHTML =  statement1;
}

