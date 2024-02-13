// calculator.js

document.addEventListener('DOMContentLoaded', function() {
    // Bind event listeners
    document.getElementById('decreasePageCount').addEventListener('click', function() {
        changePageCount(-1);
    });
    document.getElementById('increasePageCount').addEventListener('click', function() {
        changePageCount(1);
    });
    document.getElementById('paperType').addEventListener('change', calculatePrice);
    document.getElementById('academicLevel').addEventListener('change', calculatePrice);
    document.getElementById('deadline').addEventListener('change', calculatePrice);
    document.getElementById('continueToOrder').addEventListener('click', continueToOrder);

    // Initialize the displayed price
    calculatePrice();
});

function changePageCount(amount) {
    var pageCountElement = document.getElementById('pageCount');
    var currentPageCount = parseInt(pageCountElement.value, 10);
    var newPageCount = currentPageCount + amount;

    if (newPageCount < 1) newPageCount = 1; // Prevent page count from going below 1
    pageCountElement.value = newPageCount;

    calculatePrice();
}

function calculatePrice() {
    // Placeholder logic for price calculation
    var basePrice = 12; // Base price per page
    var pageCount = parseInt(document.getElementById('pageCount').value, 10);
    var price = basePrice * pageCount; // Multiply by page count

    // Update the displayed price
    document.getElementById('price').textContent = `$${price}`;
}

function continueToOrder() {
    // Placeholder for continue to order logic
    // You would typically handle this by submitting the form or redirecting to another page
    alert('Continue to order with the selected options.');
}
