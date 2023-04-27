import React from "react"
import { footer } from "../../data"
import { Footr,Container,InputWrapper,Input,Button } from "./style"
import "./style"

const Footer = () => {
  return (
    <>


      <Footr>
        <Container>
          <div className='box'>
            <div className='logo'>
              <img src='../images/logo-light.png' alt='' />
              <h2>Do You Need Help With Anything?</h2>
              <p>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p>

              <InputWrapper>
                <Input type='text' placeholder='Email Address' />
                <Button>Subscribe</Button>
              </InputWrapper>
            </div>
          </div>

          {footer.map((val) => (
            <div className='box'>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </Container>
        <div className='legal'>
        <span>© 2023 Designd By Nilofer Abdul.</span>
      </div>
      </Footr>
      
    </>
  )
}

export default Footer