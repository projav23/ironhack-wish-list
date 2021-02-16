import React from 'react'

function Button({onClick, wish}){
  return(
    <button type='button' onClick={()=>onClick(wish)}>
    Delete
    </button>
  )
}
export default Button