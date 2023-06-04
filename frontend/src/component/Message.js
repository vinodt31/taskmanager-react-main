import {useSelector, useDispatch} from "react-redux";
import {updateAlertMessage} from "../store/taskSlice";
export default function Message(){
    const updateMessage = {"status": "", "message": ""}
    const getMessage = useSelector((state)=>state.manageTask.message)   
    const dispatch = useDispatch();
    if(getMessage.status == ""){
        <></>
    }else if(getMessage.status == 200){
        return(
            <>
            <div className="alert alert-success alert-dismissible fade show">
                {getMessage.message}
                <button onClick={()=>dispatch(updateAlertMessage(updateMessage))} type="button" className="close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            </>
        );
    }else if(getMessage.status != "" && getMessage.status != 200){
        return(
            <>
            <div className="alert alert-danger alert-dismissible fade show">
            {getMessage.message}
                <button onClick={()=>dispatch(updateAlertMessage(updateMessage))} type="button" className="close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            </>
        );
    }
    
}