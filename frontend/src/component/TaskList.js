import React, {useEffect} from "react"
import {useSelector, useDispatch} from "react-redux";
import {deleteTask, fetchTask} from "../store/taskSlice";

export default function TaskList(){
    const getTask = useSelector((state)=>state.manageTask.tasks)    
    const dispatch = useDispatch();
    const removeTask = (id)=>{
        dispatch(deleteTask({"id": id}));
        console.log("test : ")
    }

    useEffect(()=>{
        dispatch(fetchTask());
    },[]);

    return(
        <>
            {getTask.map((data, index)=>(
                <li key={index}>
                    <div className="form-check">
                        <label className="form-check-label">{data.name} <i className="input-helper"></i></label>
                    </div>
                    <i  onClick={()=>removeTask(data._id)} className="remove mdi mdi-close-circle-outline"></i>
                </li>
            ))}
        </>
    );
}