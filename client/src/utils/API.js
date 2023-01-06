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

export const newWorkout = (userId, workoutName, workoutTimer, restTimer, repeatInterval, defaultWorkout, token) => {
    return fetch('api/workout/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            user_id: userId,
            workout_name: workoutName,
            workout_timer: workoutTimer,
            rest_timer: restTimer,
            repeat_interval: repeatInterval,
            default_workout: defaultWorkout
        })
    });
};