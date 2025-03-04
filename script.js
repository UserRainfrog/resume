function searchSite() {
    let query = document.getElementById('searchInput').value.toLowerCase().trim(); // Get input, convert to lowercase & trim spaces

    // Define pages and their corresponding sections
    let pages = {
        "home": "index.html",
        "projects": "project.html",
        "education": "education.html",
        "volunteer": "volun.html"
    };

    // Define sections and the pages they belong to
    let sections = {
        "skills": "index.html#skills",
        "resume": "project.html#resume",
        "school": "education.html#school",
        "clubs": "volun.html#clubs", // Fixed typo
        "church": "volun.html#church"
    };

    // Check if the query matches a page
    if (pages[query]) {
        window.location.href = pages[query]; // Redirect to the full page
    } 
    // Check if the query matches a section within a page
    else if (sections[query]) {
        window.location.href = sections[query]; // Redirect to the section inside the correct page
    } 
    // If nothing matches, show an alert
    else {
        alert("No matching page or section found! Try 'home', 'education', 'projects', 'skills', etc.");
    }

    return false; // Prevent default form submission
}