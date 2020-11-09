import React from "react";

function Row(props) {
    return (
        <p>
            {props.emp.name.first} {props.emp.name.last}, {props.emp.dob.age}, {props.emp.email}, {props.emp.location.country}
        </p>
    )
}

export default Row