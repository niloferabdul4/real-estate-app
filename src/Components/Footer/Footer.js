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
              <p>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p>
              <InputWrapper>
                <Input type='text' placeholder='Email Address' />
                <Button>Subscribe</Button>
              </InputWrapper>
            </div>
          </div>
      
        <div className='legal'>
        <span>© 2023 Designed By Nilofer Abdul.</span>
      </div>
      </Container>
      </Footr>
      
    </>
  )
}

export default Footer