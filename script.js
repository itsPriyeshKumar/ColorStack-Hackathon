document.addEventListener('DOMContentLoaded', () => {
  const alert = document.getElementById('alert');
  
  // Animate title
  gsap.from('.title', {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: 'power3.out'
  });

  // Animate card
  gsap.from('.card', {
      opacity: 0,
      scale: 0.9,
      duration: 1,
      delay: 0.3,
      ease: 'power3.out'
  });

  // Animate features
  gsap.from('.feature', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      delay: 0.5,
      ease: 'power3.out'
  });
});

function handleCredentialResponse(response) {
  // Decode the JWT token
  const responsePayload = decodeJwtResponse(response.credential);

  // Check if the email ends with @binghamton.edu
  if (responsePayload.email.endsWith('@binghamton.edu')) {
      // Successful login
      showAlert("Login successful!", true);
      // Here you would typically send the token to your server for verification
      // and create a session for the user
  } else {
      // Invalid email domain
      showAlert("Only @binghamton.edu emails are allowed", false);
      // Sign out the user
      google.accounts.id.disableAutoSelect();
  }
}

function decodeJwtResponse(token) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
  return JSON.parse(jsonPayload);
}

function showAlert(message, isSuccess) {
  const alert = document.getElementById('alert');
  alert.textContent = message;
  alert.style.backgroundColor = isSuccess ? "#D4EDDA" : "#FFF3CD";
  alert.style.color = isSuccess ? "#155724" : "#856404";
  alert.classList.remove('hidden');
  
  gsap.from(alert, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      ease: 'power3.out'
  });

  setTimeout(() => {
      gsap.to(alert, {
          opacity: 0,
          y: -20,
          duration: 0.5,
          ease: 'power3.in',
          onComplete: () => {
              alert.classList.add('hidden');
              alert.style.opacity = 1;
              alert.style.transform = 'none';
          }
      });
  }, 3000);
}