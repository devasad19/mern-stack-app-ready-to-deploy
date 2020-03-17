import React, { Component } from 'react';
import Datepicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

export default class CreateExercise extends Component{
        constructor(props){
            super(props);

            this.onChangeUsername = this.onChangeUsername.bind(this);
            this.onChangeDescription = this.onChangeDescription.bind(this);
            this.onChangeDuration = this.onChangeDuration.bind(this);
            this.onChangeDate = this.onChangeDate.bind(this);
            this.onSubmit = this.onSubmit.bind(this);

            this.state = {
                username: '',
                description: '',
                duration: 0,
                date: new Date(),
                users: []
            }
        }

        componentWillMount(){
            axios.get('https://mern-stack-crud.netlify.com/users')
             .then( res => {
                 if(res.data.length > 0){
                     this.setState({
                         users: res.data.map( user => user.username),
                         username: res.data[0].username
                     })
                 }
             })
        }

        componentDidMount(){
            this.setState({
                users: ['test users'],
                username: 'test username'
            })
        }

        onChangeUsername(e) {
            this.setState({
                username: e.target.value
            });
        }

        onChangeDescription(e) {
            this.setState({
                description: e.target.value
            })
        }
        onChangeDuration(e) {
            this.setState({
                duration: e.target.value
            })
        }
        onChangeDate(date) {
            this.setState({
                date: date
            })
        }


        onSubmit(e){
            e.preventDefault();

           const exercise = {
              username: this.state.username,
              description: this.state.description,
              duration: this.state.duration,
              date: this.state.date   
           }
           console.log(exercise);

           axios.post('https://mern-stack-crud.netlify.com/exercises/add', exercise)
             .then( res => console.log(res))

           window.location = '/';
        }

    render(){


        return(
            <div className="col-md-6 ml-5 mt-3">
                <h3 className="mb-3">Create Exercise Form</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username</label>
                        <select ref="userInput"
                             className="form-control"
                             required
                             onChange={ this.onChangeUsername }
                             value= {this.state.username}
                         >
                             {
                                 this.state.users.map( user =>{
                                     return  <option key={user} value={user}>{ user }</option>
                                     
                                 })
                             }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <input
                          className="form-control"
                          required
                          onChange={this.onChangeDescription}
                          value={this.state.description}
                        />
                    </div>
                    <div className="form-group">
                        <label>Duration</label>
                        <input
                          className="form-control"
                          required
                          onChange={this.onChangeDuration }
                          value={this.state.duration}
                         />
                    </div>
                    <div className="form-group">
                        <label>Date</label>
                        <div>
                            <Datepicker 
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                            />
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}