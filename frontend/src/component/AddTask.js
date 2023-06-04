import React, {useState} from "react"
import {useSelector, useDispatch} from "react-redux";
import {addTask, updateAlertMessage} from "../store/taskSlice";

export default function AddTask(){
    const [getTask, setTask] = useState("");
    const dispatch = useDispatch();

    const saveTask = ()=>{
        if(getTask == "" || getTask == null){
            dispatch(updateAlertMessage({"status": "error", "statuCode": "400", "message": "Please enter task"}));
            return false;
        }else{
            dispatch(addTask({"name": getTask}));
            setTask("")
        }
    }

    
    return(
        <div className="add-items d-flex">
            <input type="text" onChange={(e)=>setTask(e.target.value)} value={getTask} className="form-control todo-list-input" placeholder="Please enter task" /> 
            <button onClick={()=>saveTask()} className="add btn btn-primary font-weight-bold todo-list-add-btn">Add</button>
        </div>
    ); 
}