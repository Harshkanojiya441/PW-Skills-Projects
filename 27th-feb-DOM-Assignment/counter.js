const decrementBtn = document.getElementById("decrementBtn");
const incrementBtn = document.getElementById("incrementBtn");
const resetBtn = document.getElementById("resetBtn");
const displayValue = document.getElementById("displayValue");

counter = 0;

// Decrement Value
decrementBtn.addEventListener("click", () => {
    const value = Number(displayValue.innerText);
    if(value > -10){
        displayValue.innerText = value - 1;
    }else{
        alert("Less than -10 Negative Value Not Allowed");
    }
});

//Increment Value Button
incrementBtn.addEventListener("click", () => {
    const value = Number(displayValue.innerText);
    if (value >= 10) {
        alert("10+ Value not Allowed");
    } else {
        displayValue.innerText = value +1;
    }
});

// Reser Button
resetBtn.addEventListener("click", () => {
    displayValue.innerText = 0;
});