import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieService';
import { getGenres } from "../services/fakeGenreService";
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate';
import ListGroup from './common/listGroup';
import MoviesTable from './moviesTable';
import _ from "lodash";
class Movies extends Component {
   state = { 
    // movies:getMovies(),
     movies:[],
     genres:[],
     pageSize:4,
     currentPage:1,
     sortColumn:{ path:'title',order:'asc'}
    // selectedGenre: {}
    //{ _id: "5b21ca3eeb7f6fbccd471818", name: "Action" }
    };


    getPagedData=()=>{
                const {
                currentPage,
                pageSize,
                selectedGenre,
                sortColumn,
                movies:allMovies
              }=this.state;

      const filtered=selectedGenre && selectedGenre._id  ? 
      allMovies.filter(m=> m.genre._id === selectedGenre._id):allMovies;

      const sorted=_.orderBy(filtered,[sortColumn.path],[sortColumn.order]);

       const movies=paginate(sorted,currentPage,pageSize);
        return {
          totalCount:filtered.length,
          data:movies}
    }
    componentDidMount(){
      const genres=[{_id:'',name:'All Movies'}, ...getGenres()];
      const movies=getMovies();
     this.setState({ 
      //  movies:getMovies(),
      movies,
      genres 
      });
    }
    handleDelete(movie){
      // {console.log(movie)}
      // const movies= this.state.movies.filter(m=>m._id !== movie._id)
      // this.setState({movies})
    }
    handleHeartClick=(movie)=>{
      const movies=[...this.state.movies];
      const index=movies.indexOf(movie);
      movies[index]={...movies[index]};
      movies[index].liked= !movies[index].liked
      this.setState({movies});
    }
    handlePageChange=(page)=>{
      this.setState({currentPage:page});
    }
    handleGenreSelected=(genre)=>{
       this.setState({selectedGenre:genre,currentPage:1});
    
      }
    handleSort=sortColumn=>{
      this.setState({ sortColumn });
     };

   render() { 
     const {length:count}=this.state.movies;
     const {currentPage,
      pageSize,
      //selectedGenre,
      sortColumn,
      //movies:allMovies
    }=this.state;

     if(count === 0) return <p>There is no movie in the Database</p>
    const {totalCount,data:movies}=this.getPagedData();
    
     return ( 
      <main className="container">
        <div class="text-center">
        <a class="btn btn-primary" href="/movies/new" role="button">New Movie</a>
      </div>
  <div className='row'>
     <div className='col-3'>
      <ListGroup 
      items={this.state.genres}
      onItemSelect={this.handleGenreSelected}
      selectedItem={this.state.selectedGenre}
      />
     </div>
    <div className='col'>
     <p> Currently {totalCount} Movies In Database</p>
     <MoviesTable 
       movies={movies}
       sortColumn={sortColumn}
       onSort={this.handleSort}
       onDelete={this.handleDelete}
       onLike={this.handleHeartClick}
     />
     <Pagination 
     itemCount={totalCount}
     pageSize={pageSize}
     onPageChange={this.handlePageChange}
     currentPage={currentPage}
   />
</div>
</div>
    </main>
      );
   }
 }
 export default Movies;