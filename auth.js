const form = document.querySelector('form');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    let isValid = true;
    let messages = [];

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
        messages.push("Password dan Konfirmasi Password tidak cocok");
        isValid = false;
    }

    if (!isValid) {
        alert("Gagal Registrasi:\n- " + messages.join("\n- "));
    } else {
        alert("Registrasi Berhasil!");
        console.log("Data siap dikirim:", {
            username: usernameInput.value,
            email: emailInput.value
        });
    }
});