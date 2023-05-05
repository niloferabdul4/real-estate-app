import React from 'react';
import { useState,useEffect} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import { RegisterContainer,Wrapper,Title,Form,InputWrapper,Label,Input,Button,SignIn} from './style';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase/firebase';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

  /********   useStates  **********/      

   const [formData,setFormData]=useState({ Email:'' ,Password:'',ConfirmPassword:''})
   const [formerrors,setFormErrors]=useState({})                                      // object for errors //
   const navigate=useNavigate()

const handleChange=(event)=>{
    const {name,value}=event.target;
    setFormData(prevData=>({...prevData,[name]: value}))
    //console.log(event.target.value)
}

const handleSubmit=(event)=>{
    event.preventDefault()
    setFormErrors(validate(formData))    
    createUserWithEmailAndPassword(auth,formData.Email,formData.Password,formData.ConfirmPassword)
    .then((auth)=>{
        if(auth)          // successfully created user with email and pwd
        {
            navigate('/')           
            
        }
    })      
    .catch((error)=>console.log(error.message))   // error

}

const validate=(formData)=>
{
 
    const regX=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        if (!regX.test(formData.Email))
        {
                return toast.error('Email is Invalid')
        }

        else if (formData.ConfirmPassword!==formData.Password)
        {
           return toast.error("Password didn't match")
        }
        else{
            navigate('/')
        }
        }                                         


   
    return (

        <RegisterContainer >
           
            <Wrapper>
               <Title>Create Acccount</Title>
               <Form onSubmit={handleSubmit}>
                       
                        <InputWrapper>
                                <Label htmlFor='email'>Email</Label>
                                <Input type='text'
                                        id='email'
                                        placeholder='Email'
                                        value={formData.Email}
                                        name='Email'
                                        onChange={handleChange}
                                 />                                                                   
                               
                           <ToastContainer/>      
                        </InputWrapper>
                        <InputWrapper>
                                <Label htmlFor='pwd'>Password</Label>
                                <Input type='password' 
                                        id='pwd'
                                        placeholder='Password'
                                        value={formData.Password}
                                        name='Password'
                                        onChange={handleChange}
                                />                                                                  
                               
                            <ToastContainer/>   
                        </InputWrapper>
                        <InputWrapper>
                                <Label htmlFor='confirm'>Confirm Password</Label>
                                <Input type='password' 
                                        id='confirm'
                                        value={formData.ConfirmPassword}
                                        name='ConfirmPassword'  
                                        onChange={handleChange}
                                />
                           <ToastContainer/>      
                        </InputWrapper>

                        <Button type='submit'>Continue</Button>
                                             
                        <SignIn>Already have an account?  <Link to='/login'> Sign In </Link> </SignIn>
               </Form>

            </Wrapper>
                 

                 
        </RegisterContainer>
    );

}
export default Register;