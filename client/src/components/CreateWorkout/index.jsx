import React from "react";
import './assets/css/CreateWorkout.css';

const CreateWorkout = () => {

    return (

        <section className="create-section">
            <div className="title-div">
                <h2 className="workout-title">New Workout</h2>
                <button className="edit-button">Edit</button>
            </div>
            <form className="question-form">

                <div className="grouping">
                    <label className="question-item">Workout Interval:</label>
                    <input className="create-input" placeholder="120"/>
                </div>

                <div className="grouping">
                    <label className="question-item">Rest Interval:</label>
                    <input className="create-input" placeholder="30"/>
                </div>

                <div className="grouping">
                    <label className="question-item">Repeat (# of times):</label>
                    <input className="create-input" placeholder="8"/>
                </div>

                <div className="grouping">
                    <label className="question-item">Make this my default workout?</label>
                    <input type="checkbox" />
                </div>

                <button className="create-button" type="submit">Create Workout</button>

            </form>
        </section>
    )
}

export default CreateWorkout;