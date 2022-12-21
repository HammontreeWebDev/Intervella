const router = require("express").Router();
const { User } = require("../../models");

// GET ALL USERS
router.get('/', async (req, res) => {
    try {
        const allUserData = await User.findAll ({
            
        });

        res.status(200).json(allUserData);

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// CREATE A NEW USER
router.post('/', async (req, res) => {
    try {
        const newUserData = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });

        req.session.save(() => {
            req.session.user_id = newUserData.id;
            req.session.logged_in = true;

            res.status(200).json(newUserData);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// LOGIN USER
router.post("/login", async (req, res) => {
    try {
        const loginUser = await User.findOne({
            where: {
                email: req.body.email,
            },
        });

        if (!loginUser) {
            res.status(400).json({
                message: "Incorrect email or password. Please try again!",
            });
            return;
        }

        const validPswd = loginUser.checkPassword(req.body.password);

        if (!validPswd) {
            res.status(400).json({
                message: "Incorrect email or password. Please try again!",
            });
            return;
        }

        req.session.save(() => {
            req.session.user_id = loginUser.id;
            req.session.logged_in = true;

            res.status(200).json({
                user: loginUser,
                message: "You are now logged in!",
            });
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});