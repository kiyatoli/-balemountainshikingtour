document.getElementById('emailForm').addEventListener('submit', async (e) => {
e.preventDefault();

const form = e.target;
const messageBox = document.getElementById('messageBox');
const email = form.email.value.trim();

// Clear previous messages
messageBox.textContent = '';
messageBox.className = '';
messageBox.style.display = 'none';

try {
// Show loading state
const submitBtn = form.querySelector('button[type="submit"]');
const originalBtnText = submitBtn.innerHTML;
submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
submitBtn.disabled = true;

const response = await fetch('YOUR_NEW_SCRIPT_URL', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ email })
});

// Check if response is OK (status 200-299)
if (!response.ok) {
throw new Error(`HTTP error! status: ${response.status}`);
}

const result = await response.json();

if (result.success) {
showMessage('✅ Success! Thank you for submitting.', true);
form.reset();
} else {
showMessage(`❌ Error: ${result.error}`, false);
}
} catch (error) {
console.error('Submission error:', error);
showMessage('❌ Network error. Please try again later.', false);
} finally {
// Reset button state
const submitBtn = form.querySelector('button[type="submit"]');
submitBtn.innerHTML = originalBtnText;
submitBtn.disabled = false;
}

function showMessage(message, isSuccess) {
messageBox.textContent = message;
messageBox.className = isSuccess ? 'success' : 'error';
messageBox.style.display = 'block';
// Auto-hide after 5 seconds
setTimeout(() => {
messageBox.style.display = 'none';
}, 5000);
}
});
