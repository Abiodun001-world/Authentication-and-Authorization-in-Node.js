// public/app.js
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const adminContent = document.getElementById('admin-content');
    const loginMessage = document.getElementById('login-message');
  
    // Define the login function
    async function login() {
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      try {
        const response = await fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });
  
        const data = await response.json();
  
        if (response.ok) {
          loginMessage.textContent = `Login successful. Welcome, ${data.user.username}!`;
  
          if (data.user.role === 'admin') {
            loginForm.style.display = 'none';
            adminContent.style.display = 'block';
          }
        } else {
          loginMessage.textContent = `Login failed: ${data.message}`;
        }
      } catch (error) {
        console.error('Error during login:', error);
      }
    }
  
    // Attach the login function to the window object to make it accessible in the HTML
    window.login = login;
  });
  