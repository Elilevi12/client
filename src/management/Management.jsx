import { useState } from "react";
import Calendar from "../Calendar";
import AddTherapist from "./AddTherapist";
function Management(){

const [showCalendar,setShowCalendar]=useState(false)
const [showAddTherapist,setShowAddTherapist]=useState(false)

    function addTherapist(){
        setShowAddTherapist(showAddTherapist=>!showAddTherapist)
setShowCalendar(false)
}

function calendar(){
    setShowCalendar(showCalendar => !showCalendar)
     setShowAddTherapist(false)
}
return<div>
    <h1>management</h1>
    <button onClick={addTherapist}>הוסף מטפלים</button>
    <button onClick={calendar}> לוח שנה</button>
   {showCalendar&& <Calendar userType="admin"/>}
   {showAddTherapist&&<AddTherapist/>}
</div>

}export default Management;