const password = document.getElementById('password');
const passwordRepeat = document.getElementById('password-repeat');

password.addEventListener('input', checkPasswords);
passwordRepeat.addEventListener('input', checkPasswords);

function checkPasswords(e) {
    if (password.value == '' || passwordRepeat.value == '') {
        return;
    }
    if (password.value != passwordRepeat.value) {
        password.classList.add('error');
        passwordRepeat.classList.add('error');
        password.setCustomValidity('Passwords do not match.');
    } else {
        password.classList.remove('error');
        passwordRepeat.classList.remove('error');
        password.setCustomValidity('');
    }
}