document.addEventListener("DOMContentLoaded", function () {
    
    // --- 1. GOAL CARD SELECTION LOGIC ---
    const goalCards = document.querySelectorAll(".goal-card");
    const hiddenGoalInput = document.getElementById("savingGoal");

    if (goalCards.length > 0 && hiddenGoalInput) {
        goalCards.forEach(card => {
            card.addEventListener("click", function() {
                goalCards.forEach(c => c.classList.remove("active"));
                this.classList.add("active");
                hiddenGoalInput.value = this.getAttribute("data-goal");
            });
        });
    }

    // --- 2. REGISTRATION FORM VALIDATION ---
    const registerForm = document.getElementById("registrationForm");

    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {
            event.preventDefault(); 

            const firstName = document.getElementById("fname").value.trim();
            const lastName = document.getElementById("lastname").value.trim();
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();
            const savingGoal = hiddenGoalInput ? hiddenGoalInput.value : "";

            if (!firstName || !lastName) {
                alert("Both First Name and Last Name are required.");
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            if (password.length < 6) {
                alert("Password must be at least 6 characters long.");
                return;
            }

            if (!savingGoal) {
                alert("Please select a primary saving goal by clicking one of the cards.");
                return;
            }

            alert(`Welcome to SmartSaver, ${firstName}! Your account is active and your goal is set to: ${savingGoal}.`);
            
            if (goalCards) goalCards.forEach(c => c.classList.remove("active"));
            registerForm.reset(); 
        });
    }

    // --- 3. CONTACT FORM VALIDATION ---
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const contactName = document.getElementById("contactName").value.trim();
            const contactEmail = document.getElementById("contactEmail").value.trim();
            const contactMessage = document.getElementById("contactMessage").value.trim();

            if (!contactName || !contactEmail || !contactMessage) {
                alert("Please fill out all fields in the contact form.");
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(contactEmail)) {
                alert("Please provide a valid email address.");
                return;
            }

            if (contactMessage.length < 10) {
                alert("Your message must be at least 10 characters long.");
                return;
            }

            alert(`Thank you, ${contactName}! Your inquiry has been received.`);
            contactForm.reset();
            const phone = document.getElementById("phone").value.trim();

if (!phone) {
    alert("Please enter your phone number.");
    return;
}
        });
    }
    // --- 4. REGISTER NEW SAVINGS GOAL LOGIC ---
    const addGoalForm = document.getElementById("addGoalForm");
    const activeGoalsList = document.getElementById("activeGoalsList");
    const emptyGoalMsg = document.getElementById("emptyGoalMsg");

    if (addGoalForm) {
        addGoalForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Stop page from reloading

            // Grab inputs
            const title = document.getElementById("goalTitle").value.trim();
            const category = document.getElementById("goalCategory").value;
            const amount = document.getElementById("goalAmount").value.trim();

            // Validation
            if (!title) {
                alert("Please give your savings goal a name.");
                return;
            }
            if (!category) {
                alert("Please select a category for your goal.");
                return;
            }
            if (!amount || amount <= 0) {
                alert("Please enter a valid target amount in KES.");
                return;
            }
            const phone = document.getElementById("phone").value.trim();

if (!phone) {
    alert("Please enter your phone number.");
    return;
}

            // Remove the "empty" message if it exists
            if (emptyGoalMsg) {
                emptyGoalMsg.style.display = "none";
            }

            // Format the number to have commas (e.g., 50,000)
            const formattedAmount = Number(amount).toLocaleString();

            // Create a new HTML card for the goal
            const goalCard = document.createElement("div");
            goalCard.className = "col-md-6";
            goalCard.innerHTML = `
                <div class="card shadow-sm border-success border-start border-4 h-100">
                    <div class="card-body">
                        <span class="badge bg-success mb-2">${category}</span>
                        <h5 class="card-title fw-bold">${title}</h5>
                        <p class="card-text mb-0 text-muted">Target: <strong class="text-dark">KES ${formattedAmount}</strong></p>
                        <div class="progress mt-3" style="height: 10px;">
                            <div class="progress-bar bg-success" role="progressbar" style="width: 0%"></div>
                        </div>
                        <small class="text-muted">0% Completed</small>
                    </div>
                </div>
            `;

            // Add the new card to the page
            activeGoalsList.appendChild(goalCard);

            // Notify user and reset form
            alert(`Success! Your goal '${title}' for KES ${formattedAmount} has been registered.`);
            addGoalForm.reset();
        });
    }
});