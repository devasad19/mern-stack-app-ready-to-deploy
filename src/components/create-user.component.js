import React, { Component } from 'react';
import axios from 'axios'

export default class CreateUser extends Component{
        constructor(props){
            super(props);
            
            this.onChangeUsername = this.onChangeUsername.bind(this);
            this.formSubmit = this.formSubmit.bind(this);

            this.state = {
                username: ''
            }
        }

        componentDidMount(){
            this.setState({
                username: this.state.username
            })
        }

        onChangeUsername(e){
            this.setState({
                username: e.target.value
            })
        }

        formSubmit(e){
            e.preventDefault();

            const user = {
                username: this.state.username
            }

            console.log(user);

            axios.post('https://mern-stack-crud.netlify.com/users/add', user)
              .then( res => console.log(res.data));

            this.setState({
                username: ''
            })
            // window.location = '/';
        }


    render(){

        return(
            <div className="col-md-6 ml-5 mt-3">
                <h3 className="mb-5">Create new user form</h3>
               <form onSubmit={ this.formSubmit }>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">User Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter username"
                          onChange={ this.onChangeUsername }
                          value={ this.state.username }
                          required
                        />
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}