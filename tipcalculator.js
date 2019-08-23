    
function calculateTip()  {
    let billAmt = document.getElementById("billtotal").value;
    let serviceQuality = document.getElementById("service").value;
    let numberOfPeople = document.getElementById("peopleshare").value;
    
    if(billAmt === "" || serviceQuality == 0)  {
        alert("Please enter a value");
        return;
    }
    if (numberOfPeople === "" || numberOfPeople <= 1)  {
        numberOfPeople= 1;
        document.getElementById("each").style.display = "none";
      } else {
        document.getElementById("each").style.display = "block";
    
    }
    
    let total = (billAmt * serviceQuality) / numberOfPeople;
    total = Math.round(total*100) / 100;
    total = total.toFixed(2);
    
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
    }
    
    
    document.getElementById("totalTip").style.display= "none";
    document.getElementById("each").style.display = "none";
    
    document.getElementById("submit-btn").onclick = function() { 
    calculateTip();  
    };
