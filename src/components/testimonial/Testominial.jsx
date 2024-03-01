import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-slick/"
import Slider from 'react-slick/';

import InnerWrapper from '@components/ui/InnerWrapper'
import Title from '@components/ui/Title';
import TestimonialImg from "@images/testimonial-img.png";
import "@styles/testimonial/_testimonial.scss"


const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      };
  return (
    <section className='testimonial text-center bg-lightblue'>
        <InnerWrapper>
            <Container>
                <Title>
                    Customer's Voice
                </Title>

                <div className="content-wrapper">
                    <Row className='align-items-center'>
                        <Col lg={6} className='order-2 order-lg-1'>
                            <Slider {...settings}>
                                {
                                    Array.from({length:5}).map((_,index)=><div key={index} className='text-start'>
                                        <h5 className='fst-italic'>
                                        "PolicyBoss.com made securing my bike a breeze. The entire process, from quote to purchase, was smooth and efficient. The variety of coverage options and the clarity in policy details helped me make an informed decision. I'm a happy and well- insured rider now!"
                                        </h5>
                                        <h5 className='mt-4 fw-bold'>
                                        Shrikant Jadhav, Nashik
                                        </h5>
                                    </div>)
                                }
                            </Slider>
                        </Col>
                        <Col lg={6} className='order-1 order-lg-2'>
                            <Image src={TestimonialImg} className='img-fluid'/>
                        </Col>
                    </Row>
                </div>
            </Container>
        </InnerWrapper>
    </section>
  )
}

export default Testimonial