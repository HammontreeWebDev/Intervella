export const loginUser = (userEmail, userPswd) => {
    return fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({
          email: userEmail,
          password: userPswd
        }),
        headers: { 'Content-Type': 'application/json' },
      });
}

export const signupUser = (userName, userEmail, userPswd) => {
    return fetch('/api/user/signup', {
        method: 'POST',
        body: JSON.stringify({
            username: userName,
            email: userEmail,
            password: userPswd
        }),
        headers: { 'Content-Type': 'application/json' },
    });
}