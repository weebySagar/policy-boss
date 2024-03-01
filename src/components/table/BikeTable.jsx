import React from "react";
import { Col, Image, Row, Table } from "react-bootstrap";

import RightImg from "@images/checked.svg";
import WrongImg from "@images/wrong.svg";
import "@styles/tables/_table.scss";


const BikeTable = () => {
  const tableHeading = ["Coverage", "Third Party", "Comprehensive"];
  const tableData = [
    {
      id: 1,
      title: "Third-Party Injury/Death",
      thirdParty: "yes",
      comprehensive: "yes",
    },
    {
      id: 2,
      title: "Damages to Third-Party vehicle/property",
      thirdParty: "yes",
      comprehensive: "yes",
    },
    {
      id: 3,
      title: "Owned Damaged Covered",
      thirdParty: "no",
      comprehensive: "yes",
    },
    {
      id: 4,
      title: "Add-on Coverages",
      thirdParty: "no",
      comprehensive: "yes",
    },
    {
      id: 5,
      title: "PA (Personal Accident) Cover",
      thirdParty: "yes",
      comprehensive: "yes",
    },
  ];
  return (
    <Row className="justify-content-center">
      <Col lg={8}>
        <Table bordered className="bike-table" responsive>
          <thead>
            <tr>
              {tableHeading.map((data) => (
                <th>{data}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((data) => (
              <tr key={data.id}>
                <td>
                  <p>{data.title}</p>
                </td>
                <td>
                  {data.thirdParty === "yes" ? (
                    <Image src={RightImg} height={20} />
                  ) : (
                    <Image src={WrongImg} height={20} />
                  )}
                </td>
                <td>
                  {data.comprehensive === "yes" ? (
                    <Image src={RightImg} height={20} />
                  ) : (
                    <Image src={WrongImg} height={20} />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default BikeTable;
