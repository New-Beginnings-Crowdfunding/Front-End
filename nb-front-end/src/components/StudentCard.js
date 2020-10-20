import React from 'react';
import {StudentCardStyle} from "../styles/LandingPageStyle";

// We will grab the student info via axios and then plug it into the card

function StudentCard(){
return(
   <StudentCardStyle>
   <div style={{border: "solid red", height: "250px", borderRadius: "4%"}}>Image Placeholder</div>
    <div style={{height: "100%", width: "100%", padding: "6%"}}>
        <h2>Student Name</h2>
        <p>School Attending</p>
        <p>Area of study</p>
        <br/>
        <p>Bio</p>
        <br/>
        <h2>Amount Raised</h2>
    </div>
    
    </StudentCardStyle>
)

}

export default StudentCard;