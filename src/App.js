import React, { useState } from "react";
import "./App.scss";
import { FaInstagram } from "react-icons/fa6";
import { GoGlobe } from "react-icons/go";
import { FiFacebook } from "react-icons/fi";
import { RiTwitterXFill } from "react-icons/ri";
import { LuLinkedin } from "react-icons/lu";
import { IoMailOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { GoBook } from "react-icons/go";
import logo from "./assets/logo.webp";
import { SlSocialLinkedin } from "react-icons/sl";

function App() {
  const saveContact = () => {
    // vCard content
    const vCardData = `
    BEGIN:VCARD
    VERSION:3.0
    FN:Onkar World
    ORG:Onkar World
    TITLE:Onkar World
    TEL:+971508060418
    EMAIL:contact@onkarworld.com
    URL:https://www.onkarworld.com/
    END:VCARD`;

    // Create a Blob for the vCard file
    const blob = new Blob([vCardData], { type: "text/vcard" });

    // Create a link element
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "OnkarWorld.vcf"; // vCard file name
    document.body.appendChild(link);

    // Trigger the download
    link.click();

    // Cleanup
    document.body.removeChild(link);
  };

 
  return (
    <>
      <div class="crad_parent">
        <div class="card">
          <div class="topsection">
            <div class="span">
              <img src={logo} alt="" />
            </div>
          </div>
          <div class="bottom">
            <div class="social-icons">
              <a href="https://www.instagram.com/onkarworld/" target="blank">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/onkar.world" target="blank">
                <FiFacebook />
              </a>
              {/* <span>
                <RiTwitterXFill />
              </span> */}
              <a
                href="https://www.linkedin.com/company/onkar-world/"
                target="blank"
              >
                <SlSocialLinkedin />
              </a>
            </div>
            <div class="content">
              <a class="box" href="https://www.onkarworld.com/">
                <span>
                  {" "}
                  <GoGlobe />
                </span>
                <a style={{ fontSize: "16px" }}>onkarworld.com</a>
              </a>

              <div class="box">
                <span>
                  {" "}
                  <GoBook />
                </span>
                <a style={{ fontSize: "16px" }}>Brochures Brochures</a>
              </div>

              <a class="box" href="mailto:contact@onkarworld.com">
                <span>
                  {" "}
                  <IoMailOutline />
                </span>
                <a style={{ fontSize: "16px" }}>contact@onkarworld.com</a>
              </a>

              <a class="box" href="tel:+971 50 806 0418">
                <span>
                  {" "}
                  <FiPhone />
                </span>
                <a style={{ fontSize: "16px" }}>+971 50 806 0418</a>
              </a>
            </div>
            <div className="btn" onClick={saveContact}>
              Save Contact
            </div>
          </div>
        </div>

      
      </div>
    </>
  );
}

export default App;
