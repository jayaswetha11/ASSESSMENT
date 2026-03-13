const form = document.getElementById('registrationForm');
const inputs = {
    firstName: document.getElementById('firstName'),
    lastName: document.getElementById('lastName'),
    email: document.getElementById('email'),
    phone: document.getElementById('phone'),
    password: document.getElementById('password'),
    confirmPassword: document.getElementById('confirmPassword')
};

// --- Real-time Restrictions ---

// Prevent numbers in Name fields
[inputs.firstName, inputs.lastName].forEach(input => {
    input.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[0-9]/g, '');
        validateField(e.target);
    });
});

// Prevent letters in Phone field
inputs.phone.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, '');
    validateField(e.target);
});

// General validation on input
Object.values(inputs).forEach(input => {
    input.addEventListener('blur', () => validateField(input));
    if(input.type === 'password') {
        input.addEventListener('input', () => validateField(input));
    }
});

function validateField(input) {
    const errorId = `${input.id}Error`;
    const errorEl = document.getElementById(errorId);
    let message = "";

    // Required check
    if (!input.value.trim()) {
        message = "This field is required";
    } 
    // Email check
    else if (input.id === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
        message = "Please enter a valid email address";
    }
    // Password length check
    else if (input.id === 'password' && input.value.length < 6) {
        message = "Password must be at least 6 characters";
    }
    // Confirm Password match
    else if (input.id === 'confirmPassword' && input.value !== inputs.password.value) {
        message = "Passwords do not match";
    }

    errorEl.innerText = message;
    input.classList.toggle('invalid', message !== "");
    return message === "";
}

// --- Form Submission ---

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let isFormValid = true;
    Object.values(inputs).forEach(input => {
        const isValid = validateField(input);
        if (!isValid) isFormValid = false;
    });

    if (isFormValid) {
        const formData = {
            fullName: `${inputs.firstName.value} ${inputs.lastName.value}`,
            email: inputs.email.value,
            phone: inputs.phone.value,
            timestamp: new Date().toISOString()
        };

        console.log("Form Data Submitted:", formData);
        
        // UI Transition to Success
        document.getElementById('formContainer').style.display = 'none';
        document.getElementById('pageTitle').innerText = 'Registration Complete';
        document.getElementById('successState').style.display = 'block';
    }
});