import React from 'react';
import {StudentCardStyle} from "../styles/LandingPageStyle";

// We will grab the student info via axios and then plug it into the card

function StudentCard(){
return(
   <StudentCardStyle>
   <div style={{backgroundColor: "#c5dde0", height: "300px", borderRadius: "2%", color: "black"}}>Image Placeholder</div>
    <div style={{height: "100%", width: "100%", padding: "6%"}}>
        <h2>Student Name</h2>
        <p>School Attending</p>
        <p>Area of study</p>
        <br/>
        <p>Bio Bacon ipsum dolor amet short ribs brisket venison rump drumstick pig sausage prosciutto chicken spare ribs salami picanha doner. Kevin capicola sausage, buffalo bresaola venison turkey shoulder picanha ham pork tri-tip meatball meatloaf ribeye. Doner spare ribs andouille bacon sausage. Ground round jerky brisket pastrami shank.</p>
        <br/>
        <h2>Amount Raised</h2>
    </div>
    
    </StudentCardStyle>
)

}

export default StudentCard;