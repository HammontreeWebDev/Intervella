// * Since we are using React and it is component based, we aren't going to render any views,
// * What we can do instead is check for authentication on login page, signup, and home page and redirect if the user is already logged in.
// * Likewise, if the user is on the dashboard page and NOT logged in, we should redirect to the login page.

const router = require('express').Router();


// LOGIN
router.get("/login", (req, res) => {
    // check if already logged in and redirect to /dashboard if logged in
    if (req.session.logged_in) {
        res.redirect("/dashboard");
        return;
    }
});

// SIGNUP
router.get("/signup", (req, res) => {
    // check if already logged in and redirect to /dashboard if logged in
    if (req.session.logged_in) {
        res.redirect("/dashboard");
        return;
    }
});

// HOME
router.get("/", (req, res) => {
    // check if already logged in and redirect to /dashboard if logged in
    if (req.session.logged_in) {
        res.redirect("/dashboard");
        return;
    }
});

// DASHBOARD
router.get("/dashboard", (req, res) => {
    // check if already logged in and redirect to /login if not logged in
    if (!req.session.logged_in) {
        res.redirect("/login");
        return;
    }
});

module.exports = router;