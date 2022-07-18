import { Form,Button,Field,Input } from "reactstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
const AddItem=()=>{
  const [inputValue,setInputValue]=useState('');
  const handleInputChange= (e)=>{
    setInputValue(e.target.value)
  }
  const dispatch=useDispatch();
  const submitHandler=()=>{
      
  };



  return(
      <Form on submit={submitHandler}>
        <Input 
        type='text'
        value={inputValue}
        onChange={handleInputChange}           
        />
        
        <Button type='submit'>+</Button>
      </Form>
    )
};