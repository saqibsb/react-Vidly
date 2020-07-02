import React from 'react';
const ListGroup = ({
    selectedItem,
    textProperty,
    valueProperty,
    items,
    onItemSelect}) => {
   // const { }=props;
   // console.log('list Group Selected Item',selectedItem);
    return (        
        <ul className="list-group">
        {items.map(item=> <li 
        key={item[valueProperty]}
        onClick={()=>onItemSelect(item)}
       className={ item === selectedItem ? 'list-group-item active':'list-group-item' }
        style={ {cursor:'pointer'}}
        >
        {item[textProperty]}
        </li>
        )}
      </ul>
       );
}

ListGroup.defaultProps={
    textProperty:'name',
    valueProperty:'_id'
};

 export default ListGroup;