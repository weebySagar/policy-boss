import React from "react";

import Title from "@components/ui/Title";
import InnerWrapper from "@components/ui/InnerWrapper";
import { Container } from "react-bootstrap";

const TableComponent = ({ title ,tableComponent,className}) => {
  return (
    <div className={`table-component text-center ${className}`}>
      <InnerWrapper>
        <Container>
          <Title>{title}</Title>
          <div className="content-wrap">
            {tableComponent}
          </div>
        </Container>
      </InnerWrapper>
    </div>
  );
};

export default TableComponent;
