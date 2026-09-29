// Get all navigation links
const navLinks = document.querySelectorAll(".nav-link");

// Get the current page name
let currentPage = window.location.pathname.split("/").pop();

// If no page name is found, use index.html
if (currentPage === "") {
    currentPage = "index.html";
}


// Highlight the current page
navLinks.forEach(function(link) {

    const page = link.getAttribute("href");

    // Add active class to the current page
    if (page === currentPage) {
        link.classList.add("active");
    }


    // Use JavaScript to navigate between pages
    link.addEventListener("click", function(event) {

        event.preventDefault();

        window.location.href = page;

    });

});


// Navigate to the Televisions page
function exploreTelevisions() {

    window.location.href = "televisions.html";

}