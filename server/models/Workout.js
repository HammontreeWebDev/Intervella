const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Workout extends Model {}

Workout.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
        },
        workout_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        workout_timer: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        rest_timer: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        repeat_interval: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        default_workout: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        }
    }
)