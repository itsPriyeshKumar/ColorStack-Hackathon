function handleCredentialResponse(response) {
  const responsePayload = decodeJwtResponse(response.credential);

  if (responsePayload.email.endsWith("@binghamton.edu")) {
    // Set cookie with expiration time of 1 minute
    const expirationTime = new Date(new Date().getTime() + 60000);
    document.cookie = `session=${
      response.credential
    }; expires=${expirationTime.toUTCString()}; path=/`;

    // Redirect to login landing page
    window.location.href = "loginlanding.html";
  } else {
    const errorMessage = document.getElementById("errorMessage");
    errorMessage.textContent = "Please use a @binghamton.edu email address.";
    errorMessage.classList.remove("hidden");
  }
}

function decodeJwtResponse(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );
  return JSON.parse(jsonPayload);
}

// Check if user is already logged in
function checkSession() {
  const sessionCookie = document.cookie
    .split("; ")
    .find((row) => row.startsWith("session="));
  if (sessionCookie) {
    window.location.href = "http://localhost:3000/";
  }
}

// Run session check when the page loads
checkSession();
