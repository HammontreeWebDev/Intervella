import React, { useState } from "react";
import './assets/css/CreateWorkout.css';

import Auth from "../../utils/auth";
import { newWorkout } from "../../utils/API";

const CreateWorkout = () => {

    const token = Auth.loggedIn() ? Auth.getToken() : null;

    const userId = Auth.getProfile();

    const [defaultWorkout, setDefaultWorkout] = useState(false);

    const [workoutForm, setWorkoutForm] = useState({
        workout_name: '',
        workout_interval: '',
        rest_interval: '',
        repeat: '',
        default: defaultWorkout
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setWorkoutForm({
            ...workoutForm,
            [name]: value,
        });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (document.getElementById('#checkbox')) {
            setDefaultWorkout(true);
        }

        const response = await newWorkout(userId, workoutForm.workout_name, workoutForm.workout_interval, workoutForm.rest_interval, workoutForm.repeat, workoutForm.default, token );

        if (response.ok) {
          alert('Workout successfully created!')
        } else {
          alert('Oops! There seems to be an issue. Please make sure you have filled out all of the neccessary fields.')
        };

        setDefaultWorkout(false);

        setWorkoutForm({
            workout_name: '',
            workout_interval: '',
            rest_interval: '',
            repeat: '',
        });
    };

    return (

        <section className="create-section">
            <form className="question-form" onSubmit={handleFormSubmit}>
                <div className="title-div">   
                    <input className="workout-title" placeholder="New Workout Title" type="text" name="title" value={workoutForm.workout_name} onChange={handleChange}/>
                </div>

                <div className="grouping">
                    <label className="question-item">Workout Interval:</label>
                    <input className="create-input" placeholder="120" type="text" name="workout_interval" value={workoutForm.workout_interval} onChange={handleChange} />
                </div>

                <div className="grouping">
                    <label className="question-item">Rest Interval:</label>
                    <input className="create-input" placeholder="30" type="text" name="rest_interval" value={workoutForm.rest_interval} onChange={handleChange} />
                </div>

                <div className="grouping">
                    <label className="question-item">Repeat (# of times):</label>
                    <input className="create-input" placeholder="8" type="text" name="repeat" value={workoutForm.repeat} onChange={handleChange}/>
                </div>

                <div className="grouping">
                    <label className="question-item">Make this my default workout?</label>
                    <input type="checkbox" name="default" value={workoutForm.default} onChange={handleChange}/>
                </div>

                <button className="create-button" type="submit">Create Workout</button>

            </form>
        </section>
    )
}

export default CreateWorkout;