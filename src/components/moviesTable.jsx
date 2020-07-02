import React, { Component } from 'react';
import Liked from './common/liked';
import Table from './common/table';
class MoviesTable extends Component {
 columns=[
  // {path:''
  // ,label:'Title'},
   {path:'title',label:'Title'},
  {path:'genre.name',label:'Genre'},
  {path:'numberInStock',label:'Stock'},
  {path:'dailyRentalRate',label:'Rate'},

  {key:'like',
  content:movie=> <Liked onHeartClick={()=>this.props.onLike(movie)} liked={movie.liked} />},

  {key:'delete',
content:movie=> <button onClick={ ()=>this.props.onDelete(movie)} className="btn btn-danger">Delete</button>
}
 ];
  render() { 
    
    const {movies,sortColumn,onSort}=this.props;
    return(
  <Table 
    data={movies}
    sortColumn={sortColumn}
    onSort={onSort}
    columns={this.columns}
  />
    )
  }
}
export default MoviesTable;