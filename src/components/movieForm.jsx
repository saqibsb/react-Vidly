import React from 'react';
import queryString from 'query-string';
const MovieForm = ({match,history}) => {
    // const result=queryString.parse(location.search)
    // console.log(result)
    return ( 
        <div>  
        <h1>Movie Form {match.params.id} </h1>
        <button className='btn btn-primary'
        onClick={()=>history.push("/movies")}>
         Save
        </button>
        </div>
     );
}
 
export default MovieForm;