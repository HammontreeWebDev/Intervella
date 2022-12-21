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
})