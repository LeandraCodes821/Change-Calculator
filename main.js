// Write your JavaScript here
function handleClickEvent() {

    let amtDue = parseFloat(document.getElementById("amount-due").value);
    let amtReceived= parseFloat(document.getElementById("amount-received").value);
    let changeOwed= (amtReceived - amtDue);
    



    let wholeDollars = Math.floor(changeOwed/1);
    changeOwed= changeOwed%1;
    document.getElementById("dollars-output").innerHTML= wholeDollars


    let quarterValue= Math.floor(changeOwed/.25);
    changeOwed= changeOwed%.25;
    document.getElementById

    let dimeValue= Math.floor(changeOwed/.10);
    changeOwed= changeOwed%.10;
    console.log("dimeValue",dimeValue)

    document.getElementById("change-returned-msg").innerHTML= `Your change is $${amtReceived - amtDue}`;
    //console.log(amtReceived,amtDue)
    //console.log(changeOwed)

    }
//}

        
        
        document.getElementById("calculate-change").addEventListener("click", () => handleClickEvent());
    