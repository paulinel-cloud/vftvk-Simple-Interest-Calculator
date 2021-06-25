function compute()
{
    p = document.getElementById("principal").value;
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years);
    
    //validation for principal inputs, if amt is less than or equal to 0, will reject input 
    if (principal <= 0) {
        alert("Enter a positive number")
        document.getElementById("principal").focus();
    } else { //otherwise if valid input, will return accumulated interest text
        document.getElementById("result").innerHTML = "If you deposit <mark>" + principal + "</mark>,<br/>at an interest rate of <mark>" +
        rate + "%</mark>.<br/>You will receive an amount of <mark>" + interest + "</mark>,<br/>in the year <mark>" + year.toString() + "</mark>";
    }
}

//function to update the interest rate when slider is moved/changes
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval+'%';
}
        