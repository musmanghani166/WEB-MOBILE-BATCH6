// Navbar start
document.getElementById('navbar').style.backgroundColor = "#1d3557";
// footer
document.getElementById('footer').style.backgroundColor = "#1d3557";


// buttons clears
document.getElementById("clearstatement").onclick = function () {
    document.getElementById("statement").innerHTML = ""
}
document.getElementById("clearoutput").onclick = function () {
    document.getElementById("output").innerHTML = ""
}




// ch 8-14
// Concatenate Some Strings
document.getElementById('Concatenate Some Strings').onclick = function () {

    let work = "Assignment";
    let langunge = "Javascript";
    let number = "2";

    console.log(work + langunge + number)

    document.getElementById('output').innerHTML = work + " " + langunge + number

}

// Ask Name From User
document.getElementById('Ask Name From User').onclick = function () {
    let firstname = prompt("please enter your first name")
    let lastname = prompt("please enter your last name")

    console.log(firstname + lastname)
    document.getElementById('output').innerHTML = firstname + " " + lastname

}
// Comparison Operators

document.getElementById('Comparison Operators').onclick = function () {

    let firstValue = prompt("Enter First Value");
    let secondValue = +prompt("Enter Second Value");
    console.log(firstValue == secondValue);
    document.getElementById('statement').innerHTML = firstValue + ' == ' + '"' + secondValue + '"';
    if (firstValue == secondValue) {
        document.getElementById('output').innerHTML = "Condition is True!";
    }
    else {
        document.getElementById('output').innerHTML = "Try Again";
    }
}

// if else if

document.getElementById('if else if').onclick = function () {

    let marks = +prompt("please enter your marks out of 100")
    document.getElementById('statement').innerHTML = marks;
    console.log(marks);
    if (marks >= 90) {
        document.getElementById('output').innerHTML = "Congratulations! You Got A+ Grade";
        // document.getElementById('statement').innerHTML = "marks";
    }
    else if (marks >= 75) {
        document.getElementById('output').innerHTML = "Congratulations! You Got  B Grade";
        // document.getElementById('statement').innerHTML = "marks";
    }
    else if (marks >= 60) {
        document.getElementById('output').innerHTML = "Congratulations! You Got C Grade";
        // document.getElementById('statement').innerHTML = "marks";
    }
    else if (marks <= 50) {
        document.getElementById('output').innerHTML = "Congratulations! You  Are Fail";
    }


}
// Testing Sets of Conditions
document.getElementById("Testing Sets of Conditions").onclick = function () {
    let age = +prompt("please enter your age!")
    let weight = +prompt("please enter your weight")
    document.getElementById('statement').innerHTML = "age " + age + " ! " +  " weight " +  weight + " kg";
    if (age >= 18 && weight <= 70) {
        document.getElementById('output').innerHTML = "You are a Healthy!";
    }
    else if (age >= 18 && weight > 70) {
        document.getElementById('output').innerHTML = "You are a Fat guy !";
    }
    else {
        document.getElementById('output').innerHTML = "You are a Baby!";
    }
}
// if Statements Nested
document.getElementById('if Statements Nested').onclick = function () {
    let age = +prompt("please enter your age!")
 
    if (age >= 18) {
        let weight = +prompt("please enter your weight")
 
        if (weight <= 70) {
            document.getElementById('output').innerHTML = "You are a Smart boy !";
            document.getElementById('statement').innerHTML = "age " + age + " ! " +  " weight " + weight + " kg";

        }
        else {
            document.getElementById('output').innerHTML = "You are a Fat guy !";
            document.getElementById('statement').innerHTML = "age " + age + " ! " +  " weight " +  weight + " kg";

        }

    }
    else {
        document.getElementById('statement').innerHTML = "";
       document.getElementById('output').innerHTML = "You are a Baby!";
    }

}




















document.getElementById('Login').onclick = function () {
    let username = prompt("Enter Username");
    let password = prompt("Enter Password");


    if (username = "Usman" && password == "266166") {
        document.getElementById('statement').innerHTML = "<b>Thanks for login !</b>";
        document.getElementById('output').innerHTML = "<b>Successfully Logged in !</b>"
    }
    else {
        document.getElementById('statement').innerHTML = "Try using <b><i>Usman</i></b> as username and <b>266166</b> as Password !"
        document.getElementById('output').innerHTML = "Try Again";

    }
}
