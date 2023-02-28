// -------------- INCREMENT AND DECREMENT BUTTONS -------------------

const incrementButton = document.getElementById("increment-button");

const decrementButton = document.getElementById("decrement-button");

//defined globally so both function access it, and so we define it once.
//DRY principle - Don't Repeat Yourself
let numberOfPeople = document.getElementById("people-counter");




const incrementPeople = () => {
    // numberOfPeople = Number(numberOfPeople.innerText) + 1;
    numberOfPeople.innerText = Number(numberOfPeople.innerText) + 1;
    console.log(numberOfPeople.innerText);
}

const decrementPeople = () => {
    if (numberOfPeople.innerText != 0) {
        numberOfPeople.innerText = Number(numberOfPeople.innerText) - 1;
        console.log(numberOfPeople.innerText);
    }
}

incrementButton.addEventListener("click", incrementPeople);

decrementButton.addEventListener("click", decrementPeople);


// ---------------- COST AND TIP FIELDS AND TOTAL OUTPUTS -----------------

let billTotal = document.getElementById("bill-total");
let total = document.getElementById("total-price");
let tipPercentage = document.getElementById("tip-input");
let costPerPerson = document.getElementById("cost-per-person");

const calculateTipAmount = () => {
    if (billTotal.value != null) {
        tipAmount = (Number(tipPercentage.value) / 100) * Number(billTotal.value);
    }

    else {
        tipAmount = 0;
    }

    return tipAmount;
}

const setTotal = (e) => {
    total.innerText = Number(billTotal.value) + calculateTipAmount();
}


const setCostPerPerson = () => {
    costPerPerson.innerText = Math.round(Number(total.innerText) / Number(numberOfPeople.innerText));

}

billTotal.addEventListener("keyup", setTotal);
tipPercentage.addEventListener("keyup", setTotal);

billTotal.addEventListener("keyup", setCostPerPerson);
tipPercentage.addEventListener("keyup", setCostPerPerson);

incrementButton.addEventListener("click", setCostPerPerson);
decrementButton.addEventListener("click", setCostPerPerson);





