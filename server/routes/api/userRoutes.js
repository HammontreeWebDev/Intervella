const router = require("express").Router();
const { User } = require("../../models");

const { signToken } = require('../../utils/auth');

// GET ALL USERS (can use this if we want to establish a social media aspect at some point - maybe display posts of user shared workout content) 
router.get('/', async (req, res) => {
    try {
        const allUserData = await User.findAll({

        });

        res.status(200).json(allUserData);

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// CREATE A NEW USER
router.post('/signup', async (req, res) => {
    try {
        const newUserData = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });

        if (!newUserData) {
            return res.status(400).json({ message: 'Something is wrong!' });
        }
        const token = signToken(newUserData);
        res.json({ token, newUserData });

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

        const token = signToken(loginUser);
        res.json({ token, loginUser });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// DELETE USER
router.delete("/", async (req, res) => {
    try {
        const userData = await User.destroy({
            where: {
                id: req.body.id,
            },
        });
    } catch (err) { }
});

module.exports = router;