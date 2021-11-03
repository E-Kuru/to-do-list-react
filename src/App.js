import React from 'react'

import Form from './components/Form'
import List from './components/List'

class App extends React.Component {

  constructor(){
    super()
    
    this.state = {
      tasks : [{
        id : 0,
        description : 'Do things',
        statu : 'To do'
      },
      {
        id : 1,
        description : 'Another One',
        statu : 'doing'
      }
    ],
    isEdit : false,
    editTask : ''
    }

    this.editTask = this.editTask.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
    this.editTask = this.editTask.bind(this)
    this.addTask = this.addTask.bind(this)
  }

  // Fonction qui supprime une tâche 
  
  deleteTask(e){
    
    const index = e.target.id
    const {tasks} = this.state
    
    tasks.splice(index,1)
    this.setState({
      tasks : tasks
    })
  }

  addTask (a){

    const {task} = this.state

      this.setState({
        tasks : [{description : a, statu : 'To do'},...this.state.tasks]
    })

  }

  // Fonction qui modifie le state 'Is Modify' pour changer l'affichage 

  editTask (id){
    let id = Number(e.target.id)
    console.log(this.state.tasks.find(a => a.id === id));
    this.setState({
      isEdit : true,
      editTask : e.target
    })
    
  }

  // Fonction qui change le contenu pour edit une tâche 

  taskSave (){
    console.log('save');
  }  

  render(){
    return (
      <>
        <Form 
        addTask={this.addTask}
        />

        <List 
        idEdit={this.state.isEdit}
        tasks={this.state.tasks}
        deleteTask={this.deleteTask} 
        editTask={this.editTask} 
        taskSave={this.taskSave} 
        />

      </>
    )
  }
}
export default App