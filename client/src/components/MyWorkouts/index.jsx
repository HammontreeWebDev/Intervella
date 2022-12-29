import React from "react";
import './assets/css/MyWorkouts.css';

const MyWorkouts = (props) => {

    return(

        <button className="dashboard-button" onClick={props.workoutClick}>My Workouts</button>
    )
}

export default MyWorkouts;