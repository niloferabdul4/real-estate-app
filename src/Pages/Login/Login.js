import React, { useState ,useRef,useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Container,Wrapper,Title,Form,InputWrapper,Label,Input,SignIn,Span,ErrorLabel } from './style';
import { auth } from '../../Firebase/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';


const Login = () => {

    const[formData,setFormData]=useState({email:'',password:''})
    const[formerrors,setFormErrors]=useState({})
    const inputRef=useRef(null)
    const navigate=useNavigate()
                 
    useEffect(()=>{
                    inputRef.current.focus();
                },[]
            )
 
   const handleChange=(event)=>
   {
    const {name,value}=event.target;
    setFormData(prevData=>({...prevData,[name]:value}))
   }

   const handleSubmit=(event)=>
   { 
    event.preventDefault();
 
    signInWithEmailAndPassword(auth,formData.email,formData.password)
        .then((auth)=>{  
                        if (auth)
                        {
                        navigate('/')
                        }
                        
                        })
      .catch((error)=>toast.error(error.message))
      
   }

    return (
        <Container>           
         
                        <Wrapper>
                        <Title>Sign In</Title>
                        <Form onSubmit={handleSubmit}>
                                    <InputWrapper>
                                            <Label htmlFor='email'>Email</Label>
                                            <Input type='text' 
                                            placeholder='Email' 
                                            value={formData.email} 
                                            name='email'
                                            id='email' 
                                            ref={inputRef} 
                                            onChange={handleChange}
                                            required
                                            />   
                                        <ToastContainer />   
                                    </InputWrapper>
                                    <InputWrapper>
                                            <Label html='password'>Password</Label>
                                            <Input type='password' 
                                            placeholder='Password'  
                                            value={formData.password} 
                                            name='password'
                                            id='password'  
                                            ref={inputRef}
                                            onChange={handleChange}
                                            required/>
                                            <ToastContainer/>
                                    </InputWrapper>                            

                                    <SignIn>Login</SignIn>
                    
                                    <Span>
                                            <Label>New User?</Label>
                                            <NavLink to='/register'  style={{marginLeft:'10px', fontSize: '16px', color:'blue' , textDecoration:'none'}}>Create An Account</NavLink>
                                    </Span>
                      </Form>     
                                
                      </Wrapper>   
                              
        </Container>
    );
}

export default Login;