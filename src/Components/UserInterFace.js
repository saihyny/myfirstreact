import './UserInterFace.css'
import React,{useState} from 'react'
const UserInterFace =(props)=>
{
    const [EnterdUsername, setEnterdUsername] = useState('');
    const [EnterdAge, setEnterdAge] = useState('');

const UserNameChangeHandler=(event)=>{
setEnterdUsername(event.target.value)
}   
const AgechangeHandler=(event)=>{
setEnterdAge(event.target.value)
}


const addUserHandler =(event)=>{ 
 event.preventDefault();
  if(EnterdUsername.trim().length===0 || EnterdAge.length===0)
  {
    return;
  }
if(+EnterdAge < 1)
{
    return;
}

props.onChangeUsers(EnterdUsername,EnterdAge)
setEnterdUsername('')
setEnterdAge('')
 
  
}

    return (
        <form className='UserInterFace' onSubmit={addUserHandler}>
       
            <label htmlFor='username'>UserName</label> 
            <input type="text" id="name" onChange={UserNameChangeHandler}value={EnterdUsername}></input>
            <label htmlFor='age'> Age (years) </label>
            <input type="number" id="age" onChange={AgechangeHandler}  value={EnterdAge} ></input>
            <button type='submit'>Submit</button>
            <br></br>
            <br></br>
        </form>
    )
}

export default UserInterFace;