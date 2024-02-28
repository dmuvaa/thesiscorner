// calculator.js

document.addEventListener('DOMContentLoaded', function() {
    // Bind event listeners for the dropdowns and buttons
    document.getElementById('paperType').addEventListener('change', calculatePrice);
    document.getElementById('academicLevel').addEventListener('change', calculatePrice);
    document.getElementById('deadline').addEventListener('change', calculatePrice);

    document.getElementById('decreasePageCount').addEventListener('click', function() {
        changePageCount(-1);
    });

    document.getElementById('increasePageCount').addEventListener('click', function() {
        changePageCount(1);
    });

    document.getElementById('continueToOrder').addEventListener('click', continueToOrder);

    // Calculate the initial price
    calculatePrice();
});

// Pricing factors based on academic level
const academicLevelPricing = {
    'high_school': 1.0,
    'college': 1.2,
    'undergraduate': 1.4,
    'masters': 1.6,
    'phd': 2.0
};

// Pricing factors based on deadline
const deadlinePricing = {
    '8_hours': 2.5,
    '12_hours': 2.3,
    '24_hours': 2.0,
    '36_hours': 1.8,
    '48_hours': 1.6,
    '3_days': 1.4,
    '5_days': 1.2,
    '7_days': 1.1,
    '14_days': 1.0
};

// Base price per page
const basePricePerPage = 6;

function changePageCount(amount) {
    var pageCountElement = document.getElementById('pageCount');
    var currentPageCount = parseInt(pageCountElement.value, 10);
    currentPageCount = Math.max(currentPageCount + amount, 1); // Minimum page count is 1
    pageCountElement.value = currentPageCount;
    calculatePrice();
}

function calculatePrice() {
    var pageCount = parseInt(document.getElementById('pageCount').value, 10);
    var academicLevelFactor = academicLevelPricing[document.getElementById('academicLevel').value];
    var deadlineFactor = deadlinePricing[document.getElementById('deadline').value];
    var calculatedPrice = basePricePerPage * pageCount * academicLevelFactor * deadlineFactor;
    document.getElementById('price').textContent = `$${calculatedPrice.toFixed(2)}`;
}

function continueToOrder() {
    // Get the current selections from the form
    var paperType = document.getElementById('paperType').value;
    var academicLevel = document.getElementById('academicLevel').value;
    var deadline = document.getElementById('deadline').value;
    var pageCount = document.getElementById('pageCount').value;
    var price = document.getElementById('price').textContent;

    // Store the selections in localStorage
    localStorage.setItem('paperType', paperType);
    localStorage.setItem('academicLevel', academicLevel);
    localStorage.setItem('deadline', deadline);
    localStorage.setItem('pageCount', pageCount);
    localStorage.setItem('price', price);

    // Redirect to the order form page
    window.location.href = '/order-form'; // Update this to the URL of your order form
}

function calculateAndDisplayPrice() {
    const basePricePerPage = 6; // Base price per page, adjust as necessary
    const pageCount = parseInt(document.getElementById('pages').value, 10);
    const academicLevel = document.getElementById('academicLevel').value;
    const deadline = document.getElementById('deadline').value;

    // Retrieve pricing factors from localStorage or set default
    const academicLevelFactor = parseFloat(localStorage.getItem('academicLevelPricing_' + academicLevel)) || 1;
    const deadlineFactor = parseFloat(localStorage.getItem('deadlinePricing_' + deadline)) || 1;

    // Calculate price based on factors
    let price = basePricePerPage * pageCount * academicLevelFactor * deadlineFactor;
    document.getElementById('calculatedPrice').textContent = `Approximate price: $${price.toFixed(2)}`;
}