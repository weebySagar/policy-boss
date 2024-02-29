import InnerWrapper from "@components/ui/InnerWrapper";
import Title from "@components/ui/Title";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

import PlansImg from "@images/financial-standing.svg";
import PaperworkImg from "@images/ncb-details.png";
import BikeImg from "@images/bike-claim-settlement.png";
import ClaimImg from "@images/customer-service.svg";
import CashlessImg from "@images/cashless.svg";
import ConvenienceImg from "@images/Convenience.svg";

const ListComponent = () => {
  const listData = [
    {
      icon: PlansImg,
      title: "Get plans from 20+ General Insurers",
    },
    {
      icon: ClaimImg,
      title: "Get uncompromised claim assistance",
    },
    {
      icon: PaperworkImg,
      title: "No paper work, Go fully digital",
    },
    {
      icon: BikeImg,
      title: "Trust of more than 2Million 2wheel Owners",
    },
    {
      icon: CashlessImg,
      title: "No hidden charges, you pay what you see",
    },
    {
      icon: ConvenienceImg,
      title: "Renewal reminder & renewal assistance",
    },
  ];
  return (
    <div className="list-component text-center bg-lightblue">
      <InnerWrapper>
        <Container>
          <Title>Why Choose PolicyBoss to insure your 2Wheeler?</Title>
          <div className="content-wrap">
            <Row>
              {listData.map((list) => (
                <Col md={6}>
                  <div className="d-flex align-items-center column-gap-2 mb-4 text-start">
                    <Image src={list.icon} />
                    <p>{list.title}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </InnerWrapper>
    </div>
  );
};

export default ListComponent;
