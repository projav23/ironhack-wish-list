import React from 'react';

function Form({onSubmit, children}){
  const [wish, setWish] = React.useState('')

  const handleChange = (e) =>{
    const {value} = e.target;
    setWish(value)
    console.log(value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    onSubmit(wish)
    setWish('')

  }
  return(
    <>
      <form onSubmit={handleSubmit}>
      <input 
        name='wish'
        type='text'
        value={wish}
        onChange={handleChange}
      />
      <button>Send wish</button>
      </form>
    </>
  )
}
export default Form