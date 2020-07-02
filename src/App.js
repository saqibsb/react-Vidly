import React, { Component } from 'react';
import Movies from './components/movies';
import './App.css'
import NavBar from './components/navBar';
import {Route,Switch,Redirect} from 'react-router-dom';
import Customers from './components/customers';
import Rentals from './components/rentals';
import notFound from './components/notFound';
import MovieForm from './components/movieForm';
import LoginForm from './components/loginFrom';
import Registraion from './components/registration';
import NewMovieForm from './components/newMovieForm';
class App extends Component {
   
   render() { 
     return (
      <React.Fragment> 
      <main className="container">
      <NavBar />
      <Switch >
        <Route path='/movies/new' component={ NewMovieForm } />
        <Route path='/login' component={ LoginForm } />
        <Route path='/registration' component={ Registraion } />
        <Route path='/movies/:id=' component={ MovieForm } />
        <Route path='/movies/' component={Movies} />
        <Route path='/movies/:id' component={MovieForm}/>
        <Route path='/vidly' component={Movies} />
        <Route path='/customers' component={Customers} />
        <Route path='/rentals' component ={Rentals} />
        <Route path='/not-found' component={notFound} />
        <Route path='/' exact component={Movies} />
        <Redirect to='/not-found' />
      </Switch>
      {/* <Movies /> */}
    </main>
    </React.Fragment>
      );
   }
 }
 export default App;
