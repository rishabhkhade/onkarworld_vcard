import React from "react";
import "./App.scss";
import { FaInstagram } from "react-icons/fa6";
import { GoGlobe } from "react-icons/go";
import { FiFacebook } from "react-icons/fi";
import { RiTwitterXFill } from "react-icons/ri";
import { RiLinkedinLine } from "react-icons/ri";
import { IoMailOutline } from "react-icons/io5";
import { MdOutlineLocalPhone } from "react-icons/md";
import { GoBook } from "react-icons/go";
import logo from "./assets/logo.webp"

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
          <img src={logo} alt=""/>
          </div>
          <div class="bottom">
            <div class="social-icons">
              <span>
                <FaInstagram />
              </span>
              <span>
                <FiFacebook />
              </span>
              <span>
                <RiTwitterXFill />
              </span>
              <span>
                <RiLinkedinLine />
              </span>
            </div>
            <div class="content">
              <div class="box">
                <span>
                  {" "}
                  <GoGlobe />
                </span>
                <p style={{ fontSize: "16px" }}>onkarworld.com</p>
              </div>

              <div class="box">
                <span>
                  {" "}
                  <GoBook />
                </span>
                <p style={{ fontSize: "16px" }}>Brochures Brochures</p>
              </div>

              <div class="box">
                <span>
                  {" "}
                  <IoMailOutline />
                </span>
                <p style={{ fontSize: "16px" }}>contact@onkarworld.com</p>
              </div>

              <div class="box">
                <span>
                  {" "}
                  <MdOutlineLocalPhone />
                </span>
                <p style={{ fontSize: "16px" }}>+971 50 806 0418</p>
              </div>

              
            </div>
            <div className="btn" onClick={saveContact}>Save Contact</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
