import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

import InnerWrapper from "@components/ui/InnerWrapper";
import "@styles/footer/_footer.scss";
import fbImage from "@images/facebook.png";
import ytImage from "@images/youtube.png";
import linkedinImg from "@images/linkedIn.png";
import twitterImg from "@images/twitter.png";
import instaImg from "@images/instagram.png";
import irdaLogo from "@images/irda-logo.png";
import masterLogo from "@images/master-card.png";
import visaLogo from "@images/visa-icon.png";
import maestroLogo from "@images/maestro-icon.png";
import rupayLogo from "@images/rupay-icon.png";
import macafeeLogo from "@images/macafee.png";
import secureBlueLogo from "@images/logo-secure-blue.png";
import secureGreenLogo from "@images/logo-secure-green.png";

const Footer = () => {
  const url = "https://www.policyboss.com/";
  const footerLinks = [
    {
      title: "Insurance Links",
      links: [
        "Car Insurance",
        "Bike Insurance",
        "Commercial Vehicle Insurance",
        "Health Insurance",
        "Travel Insurance",
        "Cyber Security",
        "SME Lines",
      ],
    },
    {
      title: "About PolicyBoss",
      links: [
        "About Us",
        "Become a POSP",
        "E-Insurance Account",
        "Claim  Centers",
        "Feedback/Complaint",
        "Contact Us",
      ],
    },
    {
      title: "Legal",
      links: [
        "Notice",
        "Privacy Policy",
        "Privacy Policy PolicyBoss Pro",
        "Privacy Policy PolicyBoss Pro Elite",
        "CSR",
        "Annual Return",
        "Company Code of Conduct",
        "IRDAI Broker Code of Conduct",
        "Terms & Conditions",
        "Cancellation & Refund Policy",
      ],
    },
    {
      title: "Knowledge Center",
      links: ["Blogs & Videos", "PR & Media", "Downloads", "Site Map"],
    },
  ];

  const socialLinks = [
    {
      img: fbImage,
      url: "https://www.facebook.com/policyboss",
    },
    {
      img: ytImage,
      url: "https://www.youtube.com/user/policyboss",
    },
    {
      img: linkedinImg,
      url: "https://www.linkedin.com/company/policyboss/",
    },
    {
      img: twitterImg,
      url: "https://twitter.com/Policyboss",
    },
    {
      img: instaImg,
      url: "https://www.instagram.com/policyboss/",
    },
  ];

  const trustBadges = [
    {
      title: "Registered By",
      links: [
        {
          url: "https://www.irdai.gov.in/",
          img: irdaLogo,
        },
      ],
    },
    {
      title: "Payment By",
      links: [
        {
          url: url,
          img: masterLogo,
        },
        {
          url: url,
          img: visaLogo,
        },
        {
          url: url,
          img: maestroLogo,
        },
        {
          url: url,
          img: rupayLogo,
        },
      ],
    },
    {
      title: "Secured By",
      links: [
        {
          url: url,
          img: macafeeLogo,
        },
        {
          url: url,
          img: secureBlueLogo,
        },
        {
          url: url,
          img: secureGreenLogo,
        },
      ],
    },
  ];

  const branchData = [
    "Agra",
    "Ahmedabad",
    "Bangalore",
    "Bhubaneshwar",
    "Chandigarh",
    "Chennai",
    "Cochin",
    "Coimbatore",
    "Dehradun",
    "Gandhidham",
    "Goa",
    "Gurugram",
    "Hubli",
    "Hyderabad",
    "Indore",
    "Jaipur",
    "Kolkata",
    "Lucknow",
    "Mumbai",
    "Kalyan",
    "Kanpur",
    "Nashik",
    "New Delhi",
    "Noida",
    "Pune",
    "Raipur",
    "Rajkot",
    "Ranchi",
    "Surat",
    "Thiruvananthapuram",
    "Vadodara",
    "Vapi",
    "Vasai",
  ];
  return (
    <footer>
      <InnerWrapper>
        <Container>
          <div className="footer-links">
            <Row className="row-gap-4">
              {footerLinks.map((links, index) => (
                <Col key={index} md={6} xl={3}>
                  <h3>{links.title}</h3>
                  <ul>
                    {links.links.map((link, index) => (
                      <li>
                        <a href="#" key={index}>
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </Col>
              ))}
            </Row>
          </div>
          <hr />
          <div className="social-links">
            <ul className="d-flex justify-content-center gap-3">
              {socialLinks.map((link) => (
                <li>
                  <a href={link.url} target="_blank">
                    <Image src={link.img} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <hr />
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="footer-details text-center">
                <div className="trust-badges mb-30">
                  {trustBadges.map((data, index) => (
                    <div>
                      <h5>{data.title}</h5>
                      <ul className="">
                        {data.links.map((link, index) => (
                          <li>
                            <a href={link.url}>
                              <Image
                                src={link.img}
                                height={data.title !== "Secured By" ? "25" : ""}
                              />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <p className="instructions fw-bold mb-2">
                  FOR MORE DETAILS ON RISK FACTORS, TERMS AND CONDITIONS PLEASE
                  READ SALES BROCHURE CAREFULLY BEFORE PURCHASING THE INSURANCE
                  POLICY/CONCLUDING A SALE.
                </p>

                <div className="branch-section mb-30">
                  <p className="text-white mb-2">Branch Offices:</p>
                  <ul className="">
                    {branchData.map((branch, index) => (
                      <li key={index}>{branch}</li>
                    ))}
                  </ul>
                </div>
                <div className="broker-detail">
                  <p className="text-white">
                    LANDMARK INSURANCE BROKERS PRIVATE LIMITED
                    <br />
                    CIN U66030PN2002PTC017009
                    <br />
                    IRDAI CoR No: 216
                  </p>

                  <p className="mb-3"> | Broker Code: DB 089/03 | Valid From 13/10/2021 till 12/10/2024 (originally licensed on 13/10/2003 and renewed thereafter) | Category: Direct (Life & General) | A member of IBAI</p>
                </div>
                <div className="contact-section">
                    <p className="mb-3">Regd. Off: 1187/22, 4th Floor (above ICICI Bank ATM), Venkatesh Meher, Ghole Road, Shivaji Nagar, Pune (Maharashtra) - 411005.</p>
                    <p className="mb-3">Website: <a href="https://www.policyboss.com">www.policyboss.com</a> | Toll Free: <a href="tel:1800-419-419-9">1800-419-419-9*</a></p>
                    <p className="">* Working hours: 10:00 a.m. to 6:30 p.m. (Monday to Saturday)</p>
                </div>
                <p className="copyright mt-3 pt-3 pt-sm-0">Copyright © 2022 PolicyBoss. All rights reserved.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </InnerWrapper>
    </footer>
  );
};

export default Footer;
