import React from "react";
import "./commen.css";
import { Typography } from "@mui/material";

const footerData = [
  {
    heading: "About Us",
    about: " About us",
    contact: "Contact Us",
    trem: "Terms & Conditions",
    privacy: "Privacy & Policy",
    carrier: "Career",
  },
  {
    heading: "Business Links",
    about: " About us",
    contact: "Contact Us",
    trem: "Terms & Conditions",
    privacy: "Privacy & Policy",
  },
  {
    heading: "Social Links",
    about: "Facebook",
    contact: "Instagram",
    trem: "Twitter",
    privacy: "Linkedin",
    carrier: "Youtube",
  },
];

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="image-log">
        <img
          alt="error"
          src="http://graynod.dollopinfotech.com/assets/web/images/footer_logo.png"
        />
      </div>
      <div className="footer-middlec-part">
        <div className="card-1st-footer">
          <Typography variant="h5" sx={{paddingBottom:"20px"}}>About Us</Typography>
          <Typography
            className="text-start"
            sx={{ fontSize: "20px", color: "black" }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </Typography>
        </div>
        {footerData.map((values) => {
          return (
            <div className="card-2nd-footer">
              <Typography variant="h5" className="text-uppercase pb-4">
                {values.heading}
              </Typography>
              <ul>
                <li>
                  <a href="#!" className="text-black">
                    {values.about}
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-black">
                    {values.contact}
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-black">
                    {values.trem}
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-black">
                    {values.privacy}
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-black">
                    {values.carrier}
                  </a>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
      <div className="line"></div>
      <div className="footer-bootom" style={{fontSize:"20px"}}>© 2022 Graynod: All rights reserved</div>
    </div>
  );
};

export default Footer;
