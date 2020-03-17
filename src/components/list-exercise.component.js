import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const Exercise = (props) =>{
    return(
        <tr>
            <td>{ props.exercise.username}</td>
            <td>{ props.exercise.description }</td>
            <td>{ props.exercise.duration}</td>
            <td>{ props.exercise.date.substring(0,10)}</td>
            <td>
                <Link to={"/edit/"+props.exercise._id}>Edit</Link> |
                <a href="#" onClick={ () => {props.deleteExercise(props.exercise._id) }}>Delete</a>
            </td>
        </tr>
    )
}

export default class ListExercise extends Component{
    constructor(props){
        super(props);

        this.deleteExercise = this.deleteExercise.bind(this);

        this.state ={
            exercise : []
        }
    }

    componentDidMount(){
        axios.get('https://mern-stack-crud.netlify.com/exercises/')
          .then( res => {
              this.setState({
                  exercise: res.data
              })
          })
          .catch( err => console.log(err));
    }

    deleteExercise(id){
        axios.delete('https://mern-stack-crud.netlify.com/exercises/delete/'+id)
          .then( res => console.log(res.data));

        this.setState({
            exercise: this.state.exercise.filter( item => item._id !== id)
        })
    }

    exerciseList(){
        return this.state.exercise.map( exerciseItem =>{
            return <Exercise key={exerciseItem._id} deleteExercise={this.deleteExercise} exercise={exerciseItem} />
        })
    }


    render(){

        return(
            <div className="col-md-8 offset-md-2">
                <h3 className="mt-5 mb-5">Exercise List</h3>
                <table className="table">
                    <thead className="head-light">
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.exerciseList() }
                    </tbody>
                </table>
            </div>
        )
    }
}