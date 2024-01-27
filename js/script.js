const sidebarToggle = document.querySelector("#sidebar-toggle");
sidebarToggle.addEventListener("click", function () {
    document.querySelector("#sidebar").classList.toggle("collapsed");
});

// Get current year
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;