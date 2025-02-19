// Capture the form and resume display elements

const resumeForm = document.getElementById("resume-form") as HTMLFormElement;
const generatedResume = document.getElementById("generated-resume") as HTMLElement;

// Add Education and Work Experience dynamically
const educationSection = document.getElementById("education-section") as HTMLElement;
const workSection = document.getElementById("work-section") as HTMLElement;
const addEducationButton = document.getElementById("add-education") as HTMLButtonElement;
const addWorkButton = document.getElementById("add-work") as HTMLButtonElement;

// Function to create a new Education entry
const addEducationEntry = () => {
    const entry = document.createElement("div");
    entry.classList.add("education-entry");
    entry.innerHTML = `
        <label for="degree">Degree:</label>
        <input type="text" name="degree" placeholder="Enter Your Degree" required>
        
        <label for="institution">Institution:</label>
        <input type="text" name="institution" placeholder="Enter Your Institution" required>
        
        <label for="year">Year:</label>
        <input type="text" name="year" placeholder="Enter the Year" required>
    `;
    educationSection.appendChild(entry);
};

// Function to create a new Work Experience entry
const addWorkEntry = () => {
    const entry = document.createElement("div");
    entry.classList.add("work-entry");
    entry.innerHTML = `
        <label for="job-title">Job Title:</label>
        <input type="text" name="job-title" placeholder="Enter Your Job Title" required>
        
        <label for="company">Company:</label>
        <input type="text" name="company" placeholder="Enter Your Company" required>
        
        <label for="duration">Duration:</label>
        <input type="text" name="duration" placeholder="Enter the Duration" required>
    `;
    workSection.appendChild(entry);
};

// Attach event listeners for dynamic sections
addEducationButton.addEventListener("click", addEducationEntry);
addWorkButton.addEventListener("click", addWorkEntry);

// Function to generate the resume
const generateResume = (event: Event) => {
    event.preventDefault(); // Prevent form submission

    // Clear previous resume content
    generatedResume.innerHTML = "";

    // Capture Personal Information
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;

    // Add Personal Information to the Resume
    const personalInfo = `
        <h2>Personal Information</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
    `;
    generatedResume.innerHTML += personalInfo;

    // Capture Education Information
    const educationEntries = document.querySelectorAll(".education-entry");
    let educationHTML = `<h2>Education</h2><ul>`;
    educationEntries.forEach((entry) => {
        const degree = (entry.querySelector('input[name="degree"]') as HTMLInputElement).value;
        const institution = (entry.querySelector('input[name="institution"]') as HTMLInputElement).value;
        const year = (entry.querySelector('input[name="year"]') as HTMLInputElement).value;
        educationHTML += `<li>${degree}, ${institution} (${year})</li>`;
    });
    educationHTML += `</ul>`;
    generatedResume.innerHTML += educationHTML;

    // Capture Skills
    const skills = (document.getElementById("skills") as HTMLInputElement).value.split(",");
    const skillsHTML = `
        <h2>Skills</h2>
        <ul>
            ${skills.map((skill) => `<li>${skill.trim()}</li>`).join("")}
        </ul>
    `;
    generatedResume.innerHTML += skillsHTML;

    // Capture Work Experience
    const workEntries = document.querySelectorAll(".work-entry");
    let workHTML = `<h2>Work Experience</h2><ul>`;
    workEntries.forEach((entry) => {
        const jobTitle = (entry.querySelector('input[name="job-title"]') as HTMLInputElement).value;
        const company = (entry.querySelector('input[name="company"]') as HTMLInputElement).value;
        const duration = (entry.querySelector('input[name="duration"]') as HTMLInputElement).value;
        workHTML += `<li>${jobTitle} at ${company} (${duration})</li>`;
    });
    workHTML += `</ul>`;
    generatedResume.innerHTML += workHTML;

    // Display the Resume
    generatedResume.style.display = "block";
};

// Attach the form submit event listener
resumeForm.addEventListener("submit", generateResume);
