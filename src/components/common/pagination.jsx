import React from 'react';
import _ from 'lodash';
import  propTypes from 'prop-types';

const Pagination = Props => {
    const {itemCount,pageSize,onPageChange,currentPage}=Props;
    const pageCount=Math.ceil(itemCount/pageSize);
    if(pageCount === 1) return null;
    const pages=_.range(1, pageCount +1);
    console.log(pages);

    return ( 
        <div className="mx-auto" style={{width: 200}}>
         <nav>
            <ul className="pagination">
            {pages.map(page=>(
                <li key={page} className={ page === currentPage ? 'page-item active':'page-item' }>
                <a className="page-link" onClick={()=>onPageChange(page)}>
                {page}
                </a>
                </li>
            ))}              
            </ul>
         </nav>
        </div>
     );
}

Pagination.propTypes={
    itemCount:propTypes.number.isRequired,
    pageSize:propTypes.number.isRequired,
    onPageChange:propTypes.func.isRequired,
    currentPage:propTypes.number.isRequired
}
 
export default Pagination;
























// class Pagination extends Component {
//     constructor() {
//       super();
//       this.state = {
//         todos: ['a','b','c','d','e','f','g','h','i','j','k'],
//         currentPage: 1,
//         todosPerPage: 3
//       };
//       this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick(event) {
//       this.setState({
//         currentPage: Number(event.target.id)
//       });
//     }
    
//     render() {
//       const { todos, currentPage, todosPerPage } = this.state;

//       // Logic for displaying current todos
//       const indexOfLastTodo = currentPage * todosPerPage;
//       const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
//       const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

//       const renderTodos = currentTodos.map((todo, index) => {
//         return <li key={index}>{todo}</li>;
//       });

//       // Logic for displaying page numbers
//       const pageNumbers = [];
//       for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
//         pageNumbers.push(i);
//       }

//       const renderPageNumbers = pageNumbers.map(number => {
//         return (
//               <li 
//             className="page-item"
//              key={number}
//              id={number}
//              >
//              <a className="page-link" onClick={this.handleClick}>{number}
//             </a></li>                 
//         );
//       });

//       return (
//         <div>
//           <ul>
//             {renderTodos}
//           </ul>
//             <nav aria-label="Page navigation example" >
//             <ul className="pagination pagination-centered">
//             {renderPageNumbers}
//             </ul>
//           </nav>    
//         </div>
//       );
//     }
//   }

//   export default Pagination;



//   class Pagination extends Component {
//     state = {  }

//     render() { 
         
//         return ( 
            // <div class="mx-auto" style={{width: 200}}>
            // <nav aria-label="Page navigation example" >
            //     <ul className="pagination pagination-centered">
            //         <li className="page-item active"><a className="page-link" href="#">1</a></li>
            //         <li className="page-item"><a className="page-link" href="#">2</a></li>
            //         <li className="page-item"><a className="page-link" href="#">3</a></li>
            //     </ul>
            // </nav>
            // </div>
//          );

//     }
// }
 