import React, { Component } from 'react';
import '../styles/form.css'

class Form extends Component {
    
    constructor(){
        super()

        this.state = {
            task : ''
        }

        this.handleTaskDescriptionChange = this.handleTaskDescriptionChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    // Fonction qui stock la valeur de l'input dans le state theTask 
  
    handleTaskDescriptionChange(e){
        this.setState({
            task : e.target.value
        })
    }

      // Fonction envoi formulaire 

    handleSubmit(e){

        e.preventDefault();

        this.props.addTask(this.state.task)
    }

    render() {
        
        return (
            <>
                <form action='submit' onSubmit={this.handleSubmit}>
                    <input id='newTask' placeholder=" Ur task ?" minLength="1" onChange={this.handleTaskDescriptionChange}/>
                    <button type='submit'
                    disabled={this.state.task ? false : true}
                    style={this.state.task ? {backgroundColor : '#0c6efd'} : {backgroundColor : '#3c87f8'}}
                    >Create task</button>
                </form>

                <h1>List</h1>
            </>
        );
    }
}

export default Form