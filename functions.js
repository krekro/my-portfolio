function myexp(){
    d1 = new Date ("2024/01/01");
    d2 = new Date();

    diff = Math.abs(d2-d1);
    sec = Math.floor(diff/1000);
    min = Math.floor(sec/60);
    hr = Math.floor(min/60);
    day = Math.floor(hr/24);
    month = Math.floor(day/30);

    return month;
}

function updateskills(){
    m = myexp();
    var elem1 = document.querySelector("#exp1");
    var elem2 = document.querySelector("#exp2");
    var elem3 = document.querySelector("#exp3");
    elem1.innerText = "~"+ m + " Months";
    elem2.innerText = "~"+ m + " Months";
    elem3.innerText = "~"+ m + " Months";
}

function addRecommendation(){
    newRecommendation = document.getElementById("new_recommendation");
    
    if (newRecommendation.value != null && newRecommendation.value.trim() != ""){
        console.log("New recommendation added");
        elem = document.createElement("div");
        elem.setAttribute("class","recommendation") ;
        elem.innerHTML = "<span>&#8220;</span>" + newRecommendation.value + "<span>&#8221;</span>";
        document.getElementById("all_recommendations").appendChild(elem);

        newRecommendation.value = "";
        showPopup(true);
    }
    else{
        alert("Please leave your recommendation in the message field, Thank you!")
    }
}

function showPopup(bool) {
    if (bool) {
      document.getElementById('popup').style.visibility = 'visible'
    } else {
      document.getElementById('popup').style.visibility = 'hidden'
    }
  }
  