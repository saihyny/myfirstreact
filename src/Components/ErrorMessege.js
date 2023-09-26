import './ErrorMessege.css'
import ReactDom from "react-dom"
import React from 'react'
const ErrorMessege = (props)=>{


    const Backdrop =(props)=>{
        return (
        <div className='backdrop' onClick={props.onpress}/>
        )
    }
    const Overlay = (props)=>{
        return(
            
        <div className='modal'>
            <div className='card'>
            <header className='header'>
            {props.title}
            </header>
            <div className='content'>
                <p>{props.messege}</p></div>
            <footer className='actions'></footer>
        </div>
        </div>
        ) 
    }
    return (

       <React.Fragment>
       { ReactDom.createPortal(<Backdrop onpress={props.onpress}></Backdrop>,
        document.getElementById('backdrop'))}
        {
            ReactDom.createPortal(<Overlay title={props.title} messege={props.messege}/>,
            document.getElementById('overlay'))
        }
        </React.Fragment>
    
    );
};
export default ErrorMessege;