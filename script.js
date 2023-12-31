document.querySelector('form').addEventListener('submit', function(event) {
    let emailInput = document.getElementById('email');
    let passwordInput = document.getElementById('password');
    let email = emailInput.value;
    let password = passwordInput.value;
    
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    let passRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@])[A-Za-z\d@]{8,}$/;

    if (!regex.test(email)) {
      alert('Please enter a valid email address.');
      event.preventDefault(); 
    }
    if (!passRegex.test(password)) {
        alert('Password must contain at least one uppercase letter, one number, and only "@" as a special character.');
        event.preventDefault();
    }
});