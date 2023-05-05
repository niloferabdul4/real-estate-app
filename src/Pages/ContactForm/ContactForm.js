import React, { useRef } from "react";
import { Container,Wrapper,Form,Input,Textarea,Label,Button } from "./style";
import { toast,ToastContainer } from "react-toastify";
import { SubTitle } from "../../Components/Banner/style";
import Header from "../../Components/Header/Header";
import ToggleBar from "../../Components/ToggleBar/ToggleBar";
import emailjs from 'emailjs-com'
import { useNavigate } from "react-router-dom";

const ContactForm= () => {
  const form = useRef();
  const navigate=useNavigate()

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs
      .sendForm(
        "service_48okpfq",
        "template_u3ei10v",
        form.current,
        "PNwP9KS9m_OR-Ydgq"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message Sent");
        },
        (error) => {
          toast.error(error.text);
        }
      );
      setTimeout(() =>{navigate(-1)}, 8000);
  };

  return (
    <>
    <Header/>
    <ToggleBar/>
    <Container>
      
      <ToastContainer />
      <SubTitle>Contact Form</SubTitle>
       <Wrapper>
      <Form ref={form} onSubmit={sendEmail}>
        <Label>Name</Label>
        <Input type="text" name="name" />
        <Label>Email</Label>
        <Input type="email" name="email" />
        <Label>Message</Label>
        <Textarea name="message" />
        <Button type="submit">Send Message</Button>
      </Form>
      </Wrapper>
    </Container>
    </>
  );
};

export default ContactForm;
