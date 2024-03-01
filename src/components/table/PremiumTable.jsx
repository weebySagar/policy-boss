import React from "react";
import { Table } from "react-bootstrap";

import "@styles/tables/_table.scss"

const PremiumTable = () => {
  const tableData = [
    {
      cc: "Less than 75 cc",
      tp: "Rs. 538",
      kw: "Less than 3 KW",
      premium: "Rs. 457",
    },
    {
      cc: "75cc to 150cc",
      tp: "Rs. 714",
      kw: "More than 3 KW but less than 7 KW",
      premium: "Rs. 607",
    },
    {
      cc: "150cc to 350cc",
      tp: "Rs. 1,366",
      kw: "More than 7 KW but less than 16 KW",
      premium: "Rs. 1,161",
    },
    {
      cc: "More than 350 cc",
      tp: "Rs. 2,804",
      kw: "More than 16 KW",
      premium: "Rs. 2,383",
    },
  ];
  return (
    <Table className="premium-table" responsive>
      <thead>
        <tr>
          <th colSpan={2}>ICE Vehicles</th>
          <th colSpan={4}>Electric Vehicles</th>
        </tr>
      </thead>
      <thead>
        <tr>
          <th>Cubic Capacity (CC)</th>
          <th>TP Premium/Year</th>
          <th>Kilowatt Capacity (KW)-EV</th>
          <th>Premium/Year</th>
        </tr>
      </thead>
      <tbody>
        {
            tableData.map((data)=><tr>
                <td>{data.cc}</td>
                <td>{data.tp}</td>
                <td>{data.kw}</td>
                <td>{data.premium}</td>
            </tr>)
        }
      </tbody>
    </Table>
  );
};

export default PremiumTable;
