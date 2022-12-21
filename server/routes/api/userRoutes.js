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