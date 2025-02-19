// Capture the form and resume display elements
var resumeForm = document.getElementById("resume-form");
var generatedResume = document.getElementById("generated-resume");
// Add Education and Work Experience dynamically
var educationSection = document.getElementById("education-section");
var workSection = document.getElementById("work-section");
var addEducationButton = document.getElementById("add-education");
var addWorkButton = document.getElementById("add-work");
// Function to create a new Education entry
var addEducationEntry = function () {
    var entry = document.createElement("div");
    entry.classList.add("education-entry");
    entry.innerHTML = "\n        <label for=\"degree\">Degree:</label>\n        <input type=\"text\" name=\"degree\" placeholder=\"Enter Your Degree\" required>\n        \n        <label for=\"institution\">Institution:</label>\n        <input type=\"text\" name=\"institution\" placeholder=\"Enter Your Institution\" required>\n        \n        <label for=\"year\">Year:</label>\n        <input type=\"text\" name=\"year\" placeholder=\"Enter the Year\" required>\n    ";
    educationSection.appendChild(entry);
};
// Function to create a new Work Experience entry
var addWorkEntry = function () {
    var entry = document.createElement("div");
    entry.classList.add("work-entry");
    entry.innerHTML = "\n        <label for=\"job-title\">Job Title:</label>\n        <input type=\"text\" name=\"job-title\" placeholder=\"Enter Your Job Title\" required>\n        \n        <label for=\"company\">Company:</label>\n        <input type=\"text\" name=\"company\" placeholder=\"Enter Your Company\" required>\n        \n        <label for=\"duration\">Duration:</label>\n        <input type=\"text\" name=\"duration\" placeholder=\"Enter the Duration\" required>\n    ";
    workSection.appendChild(entry);
};
// Attach event listeners for dynamic sections
addEducationButton.addEventListener("click", addEducationEntry);
addWorkButton.addEventListener("click", addWorkEntry);
// Function to generate the resume
var generateResume = function (event) {
    event.preventDefault(); // Prevent form submission
    // Clear previous resume content
    generatedResume.innerHTML = "";
    // Capture Personal Information
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    // Add Personal Information to the Resume
    var personalInfo = "\n        <h2>Personal Information</h2>\n        <p><strong>Name:</strong> ".concat(name, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n    ");
    generatedResume.innerHTML += personalInfo;
    // Capture Education Information
    var educationEntries = document.querySelectorAll(".education-entry");
    var educationHTML = "<h2>Education</h2><ul>";
    educationEntries.forEach(function (entry) {
        var degree = entry.querySelector('input[name="degree"]').value;
        var institution = entry.querySelector('input[name="institution"]').value;
        var year = entry.querySelector('input[name="year"]').value;
        educationHTML += "<li>".concat(degree, ", ").concat(institution, " (").concat(year, ")</li>");
    });
    educationHTML += "</ul>";
    generatedResume.innerHTML += educationHTML;
    // Capture Skills
    var skills = document.getElementById("skills").value.split(",");
    var skillsHTML = "\n        <h2>Skills</h2>\n        <ul>\n            ".concat(skills.map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(""), "\n        </ul>\n    ");
    generatedResume.innerHTML += skillsHTML;
    // Capture Work Experience
    var workEntries = document.querySelectorAll(".work-entry");
    var workHTML = "<h2>Work Experience</h2><ul>";
    workEntries.forEach(function (entry) {
        var jobTitle = entry.querySelector('input[name="job-title"]').value;
        var company = entry.querySelector('input[name="company"]').value;
        var duration = entry.querySelector('input[name="duration"]').value;
        workHTML += "<li>".concat(jobTitle, " at ").concat(company, " (").concat(duration, ")</li>");
    });
    workHTML += "</ul>";
    generatedResume.innerHTML += workHTML;
    // Display the Resume
    generatedResume.style.display = "block";
};
// Attach the form submit event listener
resumeForm.addEventListener("submit", generateResume);
