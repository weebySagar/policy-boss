import InnerWrapper from '@components/ui/InnerWrapper'
import Title from '@components/ui/Title'
import React from 'react'
import { Container } from 'react-bootstrap'

const Text = () => {
  return (
    <div className='text-component text-center'>
        <InnerWrapper>
            <Container>
                <Title>
                    What is 2wheeler insurance?
                </Title>
                <div className="content-wrap">

                <p>
                Two-wheeler Insurance is a Financial Safeguard that Protects Motor Bike Owners from Unforeseen events such as Accidents, Theft, and Third- Party Liabilities. As per the Motor Vehicle Act 1988, Third-Party Bike Insurance is Mandatory in India. Riding an Uninsured Two-Wheeler can Attract a Hefty fine of Rs. 2000, making Insurance not just a choice but a Legal Necessity for a Worry-Free and Secure Riding Experience.
                </p>
                </div>
            </Container>
        </InnerWrapper>
    </div>
  )
}

export default Text