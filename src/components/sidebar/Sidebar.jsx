import React from "react";
import { Offcanvas,Image } from "react-bootstrap";

import Logo from "@images/policy-logo.png";
import "@styles/sidebar/_sidebar.scss";

const Sidebar = ({ showMenu,handleCloseSidebar, children }) => {
  return (
    <div className="sidebar">
    <Offcanvas show={showMenu} className="text-center" onHide={handleCloseSidebar}>
      <Offcanvas.Header className="justify-content-center">
        <Offcanvas.Title>
            <Image src={Logo}/>
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>{children}</Offcanvas.Body>
    </Offcanvas>
    </div>
  );
};

export default Sidebar;
