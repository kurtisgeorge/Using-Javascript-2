// Variables for cost per day and selected days
let dailyRate = 35; // Default to full days
let selectedDays = new Set(); // Store selected days

// Get references to elements
const dayButtons = document.querySelectorAll(".day-selector li");
const fullButton = document.getElementById("full");
const halfButton = document.getElementById("half");
const clearButton = document.getElementById("clear-button");
const calculatedCost = document.getElementById("calculated-cost");

// Function to toggle "clicked" class for days
function toggleDay(event) {
    const day = event.target;
    if (day.classList.contains("clicked")) {
        day.classList.remove("clicked");
        selectedDays.delete(day.id); // Remove day from the set
    } else {
        day.classList.add("clicked");
        selectedDays.add(day.id); // Add day to the set
    }
    calculateTotal(); // Recalculate the cost
}

// Function to set rate for full or half days
function setRate(event) {
    if (event.target.id === "full") {
        dailyRate = 35;
        fullButton.classList.add("clicked");
        halfButton.classList.remove("clicked");
    } else {
        dailyRate = 20;
        halfButton.classList.add("clicked");
        fullButton.classList.remove("clicked");
    }
    calculateTotal(); // Recalculate the cost
}

// Function to clear all selected days and reset cost
function clearDays() {
    selectedDays.clear();
    dayButtons.forEach(day => day.classList.remove("clicked"));
    calculatedCost.textContent = "0";
}

// Function to calculate the total cost
function calculateTotal() {
    const totalCost = selectedDays.size * dailyRate;
    calculatedCost.textContent = totalCost.toString();
}

// Add event listeners to day buttons
dayButtons.forEach(day => day.addEventListener("click", toggleDay));

// Add event listeners to full/half buttons
fullButton.addEventListener("click", setRate);
halfButton.addEventListener("click", setRate);

// Add event listener to clear button
clearButton.addEventListener("click", clearDays);