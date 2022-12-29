import React from "react";
import './assets/css/CreateWorkout.css';

const CreateWorkout = (props) => {

    return(
        <button className="dashboard-button" onClick={props.createClick}>Create A New Workout</button>
    )
}

export default CreateWorkout;