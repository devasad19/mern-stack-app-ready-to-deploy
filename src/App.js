import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route} from 'react-router-dom';
import Navbar from './components/navbar.component';
import ExerciseList from './components/list-exercise.component';
import CreateExercise from './components/create-exercise.component';
import EditExercise from './components/edit-exercise.component';
import UsersList from './components/create-user.component';

function App() {
  return (
    <div>
        
           <Navbar />
        <Switch>
           <Route path='/' exact component={ExerciseList} />
           <Route path='/create' exact component={CreateExercise} />
           <Route path='/edit/:id' exact component={EditExercise} />
           <Route path='/users' exact component={UsersList} />
        </Switch>
        
    </div>
  );
}

export default App;
