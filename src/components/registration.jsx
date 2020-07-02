import React, { Component } from 'react';
import Form from './common/form';
import Joi from 'joi-browser';
class Registraion extends Form {
  // username=React.createRef();
    state = {  
        data:{
            username:'',
            password:'',
            name:''
        },
        errors:{}
    }
    schema={
        username: Joi.string().required().email().label('Username'),
        password: Joi.string().required().min(3).label('Password'),
        name:     Joi.string().required().label('Name')
    }
    // componentDidMount(){
    //     this.username.current.focus();
    // }
  
    doSubmit=()=>{
                // call the server ->save the Changes 
        console.log('Submited');
    }
render() { 
        
        return ( 
        
            <div>
                <h1>Registraion</h1>
                <form onSubmit={this.handleSubmit}>
                {this.renderInput('Username','username')}
               { this.renderInput('Password','password','password')}
               { this.renderInput('Name','name')}
                 {this.renderButton('Registraion')}
                </form>
            </div>
         );
    }
}
export default Registraion;