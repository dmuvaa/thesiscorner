document.addEventListener('DOMContentLoaded', function() {
    // Function to update the order summary based on changes
    function updateOrderSummary() {
        // Update the order summary display
        document.getElementById('typeOfPaper').textContent = document.getElementById('paperType').value;
        document.getElementById('academicLevelDisplay').textContent = document.getElementById('academicLevel').value;
        document.getElementById('deadlineDisplay').textContent = document.getElementById('deadline').value;
        document.getElementById('pageCountDisplay').textContent = document.getElementById('pages').value;
        // Update the price display if necessary
        // document.getElementById('priceDisplay').textContent = calculatePrice();
    }

    // Event listeners for form inputs that should trigger an update to the order summary
    document.getElementById('academicLevel').addEventListener('change', updateOrderSummary);
    document.getElementById('pages').addEventListener('change', updateOrderSummary);
    // Add more event listeners for other inputs

    // Function to calculate price - this should be tailored to your specific pricing logic
    function calculatePrice() {
        // Placeholder for price calculation
        var basePrice = 12; // Example base price
        var pageCount = parseInt(document.getElementById('pages').value, 10);
        // Implement your price calculation here
        var price = basePrice * pageCount; // Simplified example calculation
        return price.toFixed(2);
    }

    // Call the update function to initialize the display
    updateOrderSummary();
});
