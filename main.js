// Write your JavaScript here
function handleClickEvent() {

    let amtDue = parseFloat(document.getElementById("amount-due").value);
    let amtReceived = parseFloat(document.getElementById("amount-received").value);
    let changeOwed = (amtReceived - amtDue);
    



    let wholeDollars = Math.floor(changeOwed/1);
    changeOwed = (changeOwed%1).toFixed(2);
    document.getElementById("dollars-output").innerHTML = wholeDollars;


    let quarterValue = Math.floor(changeOwed/.25);
    changeOwed = (changeOwed%.25).toFixed(2);
    document.getElementById("quarters-output").innerHTML = quarterValue;

    let dimeValue = Math.floor(changeOwed/.10);
    changeOwed = (changeOwed%.10).toFixed(2);
    document.getElementById("dimes-output").innerHTML = dimeValue;

    let nickelValue = Math.floor(changeOwed/0.05);
    changeOwed = (changeOwed%0.05).toFixed(2);
    document.getElementById("nickels-output").innerHTML = nickelValue;

    let pennyValue = Math.floor(changeOwed/0.01);
    changeOwed = (changeOwed%0.01).toFixed(2);
    document.getElementById("pennies-output").innerHTML = pennyValue;

    let twoDollarValue = Math.floor(changeOwed/2.00);
    changeOwed = (changeOwed%2).toFixed(2);
    document.getElementById("two-dollar-output").innerHTML = twoDollarValue;

    let fiveDollarValue = Math.floor(changeOwed/5.00);
    changeOwed = (changeOwed%5).toFixed(2);
    document.getElementById("five-dollar-output").innerHTML = fiveDollarValue;

    let tenDollarValue = Math.floor(changeOwed/10);
    changeOwed = (changeOwed%10).toFixed(2);
    document.getElementById("ten-dollar-output").innerHTML = tenDollarValue;

    let twentyDollarValue= Math.floor(changeOwed/20);
    changeOwed = (changeOwed%20).toFixed(2);
    document.getElementById("twenty-dollar-output").innerHTML = twentyDollarValue;

    console.log("singleDollarValue",singleDollarValue)

    document.getElementById("change-returned-msg").innerHTML= `Your change is $${amtReceived - amtDue}`;
    //console.log(amtReceived,amtDue)
    //console.log(changeOwed)

    }
//}

        
        
        document.getElementById("calculate-change").addEventListener("click", () => handleClickEvent());
    