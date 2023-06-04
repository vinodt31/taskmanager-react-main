import AddTask from "./component/AddTask"
import Message from "./component/Message";
import TaskList from './component/TaskList';

function App() {
  return (
    <div className="page-content page-container">
        <div className="padding">
            <div className="row container d-flex justify-content-center">
                <div className="col-md-12">
                    <div className="card px-3">
                        <div className="card-body">
                            <Message />
                            <h4 className="card-title">Add Task</h4>
                            
                            <AddTask />
                            <div className="list-wrapper">
                                <ul className="d-flex flex-column-reverse todo-list">
                                    <TaskList />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
