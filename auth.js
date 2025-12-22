const form = document.querySelector('form');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');

form.addEventListener('submit', async function (event) {
    event.preventDefault();

    let isValid = true;
    let messages = [];  

    const alphabetPattern = /^[a-zA-Z\s]+$/;
    if (!alphabetPattern.test(usernameInput.value)) {
        messages.push("Username harus berupa huruf");
        isValid = false;
    }
    if (usernameInput.value.trim().length < 3) {
        messages.push("Username minimal 3 karakter");
        isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        messages.push("Format email tidak valid");
        isValid = false;
    }

    if (passwordInput.value.length < 6) {
        messages.push("Password minimal 6 karakter");
        isValid = false;
    }

    if (passwordInput.value !== confirmPasswordInput.value) {
        messages.push("Password tidak cocok");
        isValid = false;
    }


    const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: usernameInput.value,
            email: emailInput.value,
            password: passwordInput.value
        })
    });

    if (response.ok) {
        alert("Registrasi Berhasil!");
        window.location.href = "index.html";
    } else {
        alert("Gagal mendaftar di server.");
    }
});