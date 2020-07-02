import React, { Component } from 'react';
import Form from './common/form';
import Joi from 'joi-browser';
class NewMovieForm extends Form {
  // username=React.createRef();
    state = {  
        data:{
            title:'',
            genre:'',
            numberInstock:'',
            rate:'',
            },
        errors:{}
    }
    schema={
        title: Joi.string().required().label('Title'),
        genre: Joi.string().required().min(3).label('Genre'),
        numberInStock:Joi.number().integer().min(1).max(100).required().label('Number In Stock'),
        rate:Joi.number().integer().min(0).max(10).required().label('Rate')
    }
    doSubmit=()=>{
     // call the server ->save the Changes 
    console.log('Submited');
    }
render() { 
        return (         
            <div>
                <h1>Movie Form</h1>
                <form onSubmit={this.handleSubmit}>
                {this.renderInput('Title','title')}
               { this.renderSelect('Genre','genre')}
               { this.renderInput('Number In Stock','numberInStock')}
               { this.renderInput('Rate','rate')}
               {this.renderButton('Save')}
                </form>
            </div>
         );
    }
}
export default NewMovieForm;