import React,{useState} from 'react'

export const AddCategory = ({onNewCategory}) => {

  const [inputVal, setInputVal] = useState('')

  const handleInput = e => {
    setInputVal(e.target.value);
  } 

  const submitForm= e =>{
    e.preventDefault();
    if(inputVal.length<=1) return;

    onNewCategory(inputVal);
    setInputVal('');
  }

  return (
    <form onSubmit={ submitForm }>
        <input 
            type="text" 
            placeholder='Buscar Gifs' 
            onChange={handleInput}
            value={inputVal}
        />    
    </form>
  )
}
 