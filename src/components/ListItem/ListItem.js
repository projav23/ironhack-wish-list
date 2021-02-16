import React from 'react';
import Button from '../Button/Button';

function ListItem({data, onRemove}){
return(
    <div className="card">
        <p>Wish: {data}</p>
        <Button onClick={onRemove} wish={data} />
    </div>
)
}

export default ListItem