import './UserInterFace.css'
import React,{useState} from 'react'
import ErrorMessege from './ErrorMessege';
import './ErrorMessege.css'
const UserInterFace =(props)=>
{
    const [EnterdUsername, setEnterdUsername] = useState('');
    const [EnterdAge, setEnterdAge] = useState('');
    const [error1 , setError] = useState()

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
    setError({title:'invalid input', messege:'please enter correct input'})
    return;
  }
if(+EnterdAge < 21)
{
    setError({title:'invalid age', messege:'pakka kelli adukoamma 😁🤣'})
    return;
}

props.onChangeUsers(EnterdUsername,EnterdAge)
setEnterdUsername('')
setEnterdAge('')
 
  
}
const errorHandler =()=>{
    setError(null)
}

    return (
      <div>
        { error1 && <ErrorMessege title={error1.title}
         messege={error1.messege} onpress={errorHandler}></ErrorMessege>}
        
        <form className='UserInterFace' onSubmit={addUserHandler}>
       
            <label htmlFor='username'>UserName</label> 
            <input type="text" id="name" onChange={UserNameChangeHandler}value={EnterdUsername}></input>
            <label htmlFor='age'> Age (years) </label>
            <input type="number" id="age" onChange={AgechangeHandler}  value={EnterdAge} ></input>
            <button type='submit'>Submit</button>
            <br></br>
            <br></br>
           
        </form>
        </div>
         
    
    )
}

export default UserInterFace;