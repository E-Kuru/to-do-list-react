import { Component } from 'react';

import '../styles/tasks.css'

class List extends Component {

    constructor(){

        super()

        // this.state = {
        //     indexTask : 0
        // }
    }
    
    render() {

        const {tasks, edit, deleteTask, editTask, taskSave} = this.props

        return (
            <div>
                {tasks.map( (e, i) => (
                    <div className="tasks" key={i}>
                        {/* <p>{i}</p> */}
                        {/* {this.state.indexTask === i ?
                            <div className="tasks" key={i}>
                                <input type="text" onChange={editTask} id={i}/>
                                <select id={i} class="form-select" aria-label="Select status">
                                    <option value="to do">To do</option>
                                    <option value="doing">Doing</option>
                                    <option value="done">Done</option>
                                </select>
                                <button onClick={taskSave}>Edit</button>
                            </div> 
                            :
                        } */}
                        <>
                            <p>{e.description}</p>
                            <p>{e.statu}</p>
                            <button onClick={edit} id={i}>Edit</button>
                            <button onClick={deleteTask} id={i}>delet</button>    

                        </>
                    </div>
                
                ))}
            </div>
        );
    }
}

export default List;