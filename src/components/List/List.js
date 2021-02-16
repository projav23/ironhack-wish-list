import React from 'react'
import ListItem from '../ListItem/ListItem'

function List({wishes, onClick}){

console.log('list wishes',wishes)
return(
  <>
  {
    wishes.map((wish, idx)=>
      <ListItem key={idx} data={wish} onRemove={onClick}/>
    )
  }
  
  </>
)
}

export default List