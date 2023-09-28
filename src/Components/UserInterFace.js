import './UserInterFace.css'
import React,{useState,useRef} from 'react'
import ErrorMessege from './ErrorMessege';
import './ErrorMessege.css'
const UserInterFace =(props)=>
{
    const EnterdUsername1=useRef()
    const EnterdUserAge1=useRef()
    const EnterdUserCollege1=useRef()
  
    const [error1 , setError] = useState()




const addUserHandler =(event)=>{ 
 event.preventDefault();
  if(EnterdUsername1.current.value.length===0 || EnterdUserAge1.length===0)
  {
    setError({title:'invalid input', messege:'please enter correct input'})
    return;
  }
if(EnterdUserAge1.current.value < 21)
{
    setError({title:'invalid age', messege:'pakka kelli adukoamma 😁🤣'})
    return;
}

props.onChangeUsers(EnterdUsername1.current.value,EnterdUserAge1.current.value,EnterdUserCollege1.current.value)
EnterdUsername1.current.value=''
EnterdUserAge1.current.value=''
EnterdUserCollege1.current.value='' 

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
            <input type="text" id="name" ref={EnterdUsername1} ></input>
            <label htmlFor='age'> Age (years) </label>
            <input type="number" id="age"  ref={EnterdUserAge1}  ></input>
            <label htmlFor='username'> college </label>
            <input type="text" id="college" ref={EnterdUserCollege1}   ></input>
            <button type='submit'>Submit</button>
            <br></br>
            <br></br>
           
        </form>
        </div>
         
    
    )
}

export default UserInterFace;