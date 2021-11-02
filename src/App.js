import React from 'react'

import Form from './components/Form'
import List from './components/List'

class App extends React.Component {

  constructor(){
    super()
    
    this.state = {
      tasks : [{
        description : 'Do things',
        statu : 'To do'
      },
      {
        description : 'Another One',
        statu : 'doing'
      }
    ],
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

    if(a.length < 1){

      alert('Enter a Task name pelase')
    }
    else{
      this.setState({
        tasks : [{description : a, statu : 'To do'},...this.state.tasks]
    })}

  }

  // Fonction qui change l'input de la tache 

  inputEdit (e){
    console.log(e.target.value);
  }

  // Fonction qui modifie le state 'Is Modify' pour changer l'affichage 

  editTask (){
    console.log('edit');
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
        tasks={this.state.tasks}
        edit={this.editTask} 
        deleteTask={this.deleteTask} 
        editTask={this.editTask} 
        taskSave={this.taskSave} 
        />

      </>
    )
  }
}
export default App