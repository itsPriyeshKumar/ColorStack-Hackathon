function checkSession() {
    const sessionCookie = document.cookie.split('; ').find(row => row.startsWith('session='));
    if (sessionCookie) {
        const token = sessionCookie.split('=')[1];
        const userData = decodeJwtResponse(token);
        displayUserInfo(userData);
    } else {
        window.location.href = 'index.html';
    }
}

function displayUserInfo(userData) {
    const userInfo = document.getElementById('userInfo');
    userInfo.innerHTML = `
        <p>Welcome, ${userData.name}!</p>
        <p>Email: ${userData.email}</p>
    `;
}

function decodeJwtResponse(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
}

function logout() {
    document.cookie = 'session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    window.location.href = 'index.html';
}

document.getElementById('logoutBtn').addEventListener('click', logout);

// Check session when the page loads
checkSession();