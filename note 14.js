function validateForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    let isValid = true;

   
    emailError.style.display = 'none';
    passwordError.style.display = 'none';

   
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailError.style.display = 'block';
        isValid = false;
    }

  
    if (password.length < 6) {
        passwordError.style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPassword', password);
       
        alert('Login successful!');
        
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
        
    }
}


window.onload = function() {
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');
    if (storedEmail) {
        document.getElementById('email').value = storedEmail;
    }
    if (storedPassword) {
        document.getElementById('password').value = storedPassword;
    }
};