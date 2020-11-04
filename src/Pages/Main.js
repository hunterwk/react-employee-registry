import React, { useState } from "react";

function Main() {
    const [employees, changeEmployees] = useState([]);
    function getEmployees() {
        fetch("https://randomuser.me/api/?results=100").then((res) => (res.json())).then((data) => {
            changeEmployees(data)
        })
    }




    return (
        <div>
            {/* {employees.length
                ? employees.map((emp, index) => (
                    <h1>{emp.name}</h1>
                ))
                : getEmployees()
            } */}
        </div>
    )
}
export default Main;

//make quick button that runs getemployees()