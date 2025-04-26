// Simple toast notification
function showToast(message, type = 'success') {
    let toast = document.getElementById('login-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'login-toast';
        toast.style.position = 'fixed';
        toast.style.bottom = '2rem';
        toast.style.right = '2rem';
        toast.style.background = type === 'success' ? '#4f46e5' : '#ef4444';
        toast.style.color = '#fff';
        toast.style.padding = '1rem 1.5rem';
        toast.style.borderRadius = '0.5rem';
        toast.style.boxShadow = '0 8px 32px rgba(60,72,100,0.12)';
        toast.style.fontWeight = '600';
        toast.style.zIndex = 9999;
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.style.display = 'block';
    setTimeout(() => { toast.style.display = 'none'; }, 2500);
}

// Demo login handler
const loginForm = document.querySelector('.login-form');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('login-email').value.trim();
        const password = document.getElementById('login-password').value.trim();
        if (!email || !password) {
            showToast('Please enter both email and password.', 'error');
            return;
        }
        // Demo: Accept any non-empty credentials
        showToast('Login successful! Redirecting...', 'success');
        setTimeout(() => {
            window.location.href = 'exam.html';
        }, 1200);
    });
}