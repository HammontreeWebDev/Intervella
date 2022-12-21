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

// CREATE A WORKOUT
router.post('/', withAuth, async (req, res) => {
    try {
        const workoutData = await Workout.create({
            user_id: req.session.user_id,
            workout_name: req.body.workout_name,
            workout_timer: req.body.workout_timer,
            rest_timer: req.body.rest_timer,
            repeat_interval: req.body.repeat_interval,
            default_workout: req.body.default_workout
        });
        req.session.save(() => {
            req.session.logged_in = true;
            res.status(200).json(workoutData);
        });
    } catch (err) {
        console.error(err);
        res.status(400).json(err);
    }
});

// UPDATE WORKOUT
router.put('/', withAuth, async (req, res) => {
    try {
        const workoutData = await Workout.update(req.body, {
            where: {
                id: req.body.workout_id,
                workout_name: req.body.workout_name,
                workout_timer: req.body.workout_timer,
                rest_timer: req.body.rest_timer,
                repeat_interval: req.body.repeat_interval,
                default_workout: req.body.default_workout
            },
        });

        if (!workoutData) {
            res.status(400).json({
                message: "Workout does not exist. Please create it first.",
            });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// DELETE WORKOUT
router.delete('/', withAuth, async (req, res) => {
    try {
        const workoutData = await Workout.destroy({
            where: {
                id: req.body.workout_id,
            },
        });

        if (!workoutData) {
            res.status(404).json({ message: "No workout found with that id" });
            return;
        }

        res.status(200).json(workoutData);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

module.exports = router; 