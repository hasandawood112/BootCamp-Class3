import React from 'react';

function StudentDetails(props){

    return(

        <div>
            <h1>Student Details</h1>
            <p><b>Name :</b> {props.Name}</p>
            <p><b>Father Name :</b> {props.FName}</p>
            <p><b>Course :</b> {props.Course}</p>
            <p><b>Age :</b> {props.Age}</p>
        </div>
    );

}

export default StudentDetails;
