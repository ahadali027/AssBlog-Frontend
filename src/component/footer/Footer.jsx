import React from 'react'
import SectionWrapper from '../SectionWrapper'
import Logo from '../Logo'

function Footer() {
  return (
    <div className='bg-brand-primary'>
        <SectionWrapper>
            <Logo/>
            <h1 className='text-brand-light'>Copyright Ahad Ali</h1>
        </SectionWrapper>
    </div>
  )
}

export default Footer