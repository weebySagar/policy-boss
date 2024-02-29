import React from "react";
import { Container, Row, Col, Image, Form } from "react-bootstrap";

import InnerWrapper from "@components/ui/InnerWrapper";
import ContactForm from "@components/form/ContactForm";
import HeroImg from "@images/hero-banner-policy-boss-img.svg";
import "@styles/hero-banner/_hero-banner.scss";

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <InnerWrapper>
        <Container>
          <Row className="row-gap-4">
            <Col xs={12} lg={6} className="text-center">
              <div className="hero-title">
                <h1>
                  Get your Bike Insured Starting @ <span>&nbsp;Rs.&nbsp;</span>*
                  & Dodge Hefty Fines!
                </h1>
              </div>
              <div className="hero-image">
                <Image src={HeroImg} />
              </div>
              <div className="terms-condition text-lg-start">
                <h5>
                  Unbeatable Coverage, Unbelievable Price -{" "}
                  <span>ACT NOW!</span>
                </h5>
                <p>
                  T&C Apply & Subject to respective insurance company policy
                  terms & conditions.
                </p>
              </div>
            </Col>
            <Col xs={12} lg={6} className="d-flex justify-content-center justify-content-lg-end">
              <ContactForm />
            </Col>
          </Row>
          <hr />
          <h5 className="text-center fw-semibold">
            Kickstart worry-free rides at an incredible price! Insure your bike starting at just Rs.457* and shield yourself from the pain of heavy fines for riding uninsured. Don't let the road catch you off guard - secure your ride now!
          </h5>
        </Container>
      </InnerWrapper>
    </div>
  );
};

export default HeroBanner;
