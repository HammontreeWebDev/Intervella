const router = require("express").Router();
const { User, Workout } = require("../../models");
const withAuth = require("../../utils/auth");

// Get All Workouts belonging to a user:
router.get('/user/:id', async (req, res) => {
    try {
        const userData = await Workout.findAll({
            where: {
                user_id: req.params.id,
            },
            order: [["createdAt", "ASC"]],
        });
        if (!userData) {
            res.status(404).json({
                message: `No user found with id: ${req.params.id}`,
            });
            return;
        }
        res.status(200).json(userData);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// GET a single workout
router.get('/:id', async (req, res) => {
    try {
        const workoutData = await Workout.findOne({
            where: {
                id: req.params.id
            }
        });

        if (!workoutData) {
            res.status(404).json({
                message: `No workout found with id: ${req.params.id}`,
            });
            return;
        }
        res.status(200).json(workoutData);

    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});