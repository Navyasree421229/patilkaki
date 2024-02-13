document.addEventListener("DOMContentLoaded", function() {
    setInterval(function() {
        document.getElementById("form-container").classList.remove("hidden");
    }, 15000); // Show form every 15 seconds
});

function closeForm() {
    document.getElementById("form-container").classList.add("hidden");
}

