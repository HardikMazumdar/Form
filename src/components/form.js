import React, { useState, useEffect } from 'react';
import * as EmailValidator from 'email-validator';
function Form(props)
{
    const [firstName,setFirstName] = useState('');
    const [fnFocused,setFnFocused] = useState(false);

    const [lastName, setLastName] = useState('');
    const [lnFocused,setLnFocused] = useState(false);

    const [phoneNumber,setPhoneNumber] = useState('');
    const [phnFocused, setPhnFocused] = useState(false);

    const [email,setEmail] = useState('');
    const [check,setCheck] = useState(false);

    const [dept,setDept] = useState('cse');
    useEffect(()=>{
        console.log("Hello");
    },[])
    
    function isDisabled()
    {
        if ((firstName.length===0) || 
        (lastName.length===0) || 
        ((email.length===0) || !(EmailValidator.validate(email))) || 
        (phoneNumber.length===0 || !( parseInt(phoneNumber)<=9999999999 && parseInt(phoneNumber)>=1000000000)))
            {
                return true;
            }
        else
         {
            return false;
    
         }
    }
    function submitted(e)
    {
        //a
        e.preventDefault();
        alert('Form submitted successfully');
        setFirstName('');
        setFnFocused(false);
        setLastName('');
        setLnFocused(false);
        setPhoneNumber('');
        setPhnFocused(false);
        setEmail('');
        setCheck(false);
        setDept('cse');

    }
    function changeFirstName(event)
    {
        setFirstName(event.target.value);
    }
    function changeLastName(event)
    {
        setLastName(event.target.value);
    }
    function changeEmail(event)
    {
        setEmail(event.target.value);
    }
    function changePhoneNumber(event)
    {
        setPhoneNumber(event.target.value);
    }
    function changeDept(event)
    {
        setDept(event.target.value);
    }
    return(
        <div className='form1'>
            <form onSubmit={submitted}>
                <h1>Registration Form</h1>
                <br/>
                <br/>
                <label htmlFor='fn'>First Name</label><sup id='sup'>*</sup><br/>
                <input type='text' id='fn' value={firstName} onChange={changeFirstName} onBlur={()=>{setFnFocused(true)}}></input><br/>
                {fnFocused && (firstName.length===0) && <span>{`Field cannot be empty`}</span>}
                <br/>
                <br/>
                <label htmlFor='ln'>Last Name</label><sup id='sup'>*</sup><br/>
                <input type='text' id='ln' value={lastName} onChange={changeLastName} 
                onBlur={()=>{setLnFocused(true)}} ></input><br/>
                {lnFocused && (lastName.length===0) &&<span>{`Field cannot be empty`}</span>}
                <br/>
                <br/>
                <label htmlFor='email'>Please enter your email id</label><sup id='sup'>*</sup><br/>
                <input type='text' id='email' value={email} onChange={changeEmail} onBlur={()=>{setCheck(true)}}></input><br/>
                {check && (email.length===0? <span>Field cannot be empty</span> :(!(EmailValidator.validate(email)) && <span>Invalid Email ID</span>) )}
                <br/>
                <br/>
                <label htmlFor='phn'>Mobile no</label><sup id='sup'>*</sup><br/>
                <input type='text' id='phn' value={phoneNumber} onChange={changePhoneNumber} onBlur={()=>{setPhnFocused(true)}}></input><br/>
                {phnFocused && (phoneNumber.length===0? <span>Field Cannot be empty</span> : (!(parseInt(phoneNumber)<=9999999999 && parseInt(phoneNumber)>=1000000000) && <span>Invalid Phone Number</span>))}
                <br/>
                <br/>
                <label htmlFor='dept'>Select Dept</label><sup id='sup'>*</sup><br/>
                <select value={dept} onChange={changeDept}>
                    <option value='cse'>CSE</option>
                    <option value='it'>IT</option>
                    <option value='ee'>EE</option>
                    <option value='me'>ME</option>
                    <option value='ce'>EE</option>
                </select><br/>
                <br/>
               <br/>
          
               <button type='submit' disabled={isDisabled() === true ?true:false} >Submit</button>
               
            </form>
        </div>
    )
}  
export default Form;