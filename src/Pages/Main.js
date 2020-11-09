import React, { useState, useEffect } from "react";
import Row from "../components/row/index";
import "./style.css";


function Main() {
    const [employees, changeEmployees] = useState([]);
    
    useEffect(() => {
        fetch("https://randomuser.me/api/?results=5").then((res) => (res.json())).then((data) => {
            changeEmployees(data.results)
        })
    }, [])

    function ageSort() {
        const sortedEmployees = employees.sort((a,b) => {
            return a.dob.age - b.dob.age
        })
        changeEmployees(sortedEmployees);


    }


    return (
        <div>
            <button onClick= {ageSort} >Sort by age</button>
            {  
            (employees.length !== 0) && employees.map((emp, index) => (
               <div key={index}>
               <Row 
               emp = {emp}
               />
               </div>
            ))
            
            }
        
        </div>
    )
}
export default Main;

//make quick button that runs getemployees()