document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById("registrationForm");

    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {
            // Prevent the default form submission (page reload)
            event.preventDefault(); 

            // Grab form values
            const firstName = document.getElementById("fname").value.trim();
            const lastName = document.getElementById("lastname").value.trim();
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();
            const savingGoal = document.getElementById("savingGoal").value.trim();

            // 1. Double check that both First Name and Last Name are populated
            if (!firstName || !lastName) {
                alert("Both First Name and Last Name are required fields.");
                return;
            }

            // 2. Strict Email Verification using standard Regex
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert("Please enter a valid email address (e.g., user@example.com).");
                return;
            }

            // 3. Password Length Check
            if (password.length < 6) {
                alert("Password must be at least 6 characters long.");
                return;
            }

            // 4. Goal Field - Single Word Restriction Check
            // (If the string contains spaces, it means it's more than one word)
            if (savingGoal.includes(" ") || savingGoal.length === 0) {
                alert("Your primary saving goal must be a single word (no spaces!).");
                return;
            }

            // Success Action
            alert(`Welcome aboard, ${firstName} ${lastName}! Your registration is valid and your target goal is set to: ${savingGoal}.`);
            registerForm.reset(); 
        });
    }
});


    // 2. CONTACT FORM VALIDATION
    
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Stop page reload

            // Grab contact inputs
            const contactName = document.getElementById("contactName").value.trim();
            const contactEmail = document.getElementById("contactEmail").value.trim();
            const contactMessage = document.getElementById("contactMessage").value.trim();

            // Check if fields are empty
            if (!contactName || !contactEmail || !contactMessage) {
                alert("Please fill out all fields in the contact form.");
                return;
            }

            // Strict Email Validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(contactEmail)) {
                alert("Please provide a valid email address so we can get back to you.");
                return;
            }

            // Length check on the text message field
            if (contactMessage.length < 10) {
                alert("Please write a slightly longer message (at least 10 characters) so we can fully understand your request.");
                return;
            }

            // Success action
            alert(`Thank you, ${contactName}! Your message has been simulated as sent. We will review it shortly.`);
            contactForm.reset(); // Clear the form fields
        });
    }
