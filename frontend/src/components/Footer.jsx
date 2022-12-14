import React from "react";

const Footer = ({scrollToTest, scrollToLanding, scrollToApi, scrollToNpm}) => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <div className="footer-subheading">About</div>
          <span style={{ fontStyle: "italic" }}>Hey, there 👋 </span> Get Link
          preview is a tool which will generate the link's preview data. You can
          try the feature directly or use an API to integrate it in your app.
          You just need to pass the API and the link preview tool will take care
          of it and send the preview data back.
        </div>

        <div className="footer-address">
          <div className="footer-subheading-links">Useful links</div>

          <ul className="list-style-none">
            <li className="footer-list-item">
              <div onClick={scrollToLanding} style={{cursor: "pointer"}}>
                Home
              </div>
            </li>
            <li className="footer-list-item">
              <div onClick={scrollToTest} style={{cursor: "pointer"}}>
                Test
              </div>
            </li>
            <li className="footer-list-item">
              <div style={{cursor: "pointer"}} onClick={scrollToApi}>
                API
              </div>
            </li>
            <li className="footer-list-item">
              <div style={{cursor: "pointer"}} onClick={scrollToNpm}>
                NPM package
              </div>
            </li>
          </ul>
        </div>

        <div className="footer-links">
          <div className="footer-subheading-link">Get in touch</div>
          <ul className="list-style-none">
            <li className="footer-list-item">
              <a
                href="https://github.com/siddhigate"
                target="_blank"
                className="link"
              >
                <i className="fab fa-github"></i>
                <p>siddhigate</p>
              </a>
            </li>
            <li className="footer-list-item">
              <a
                href="https://twitter.com/SiddhiGate"
                target="_blank"
                className="link"
              >
                <i className="fab fa-twitter"></i>
                <p>SiddhiGate</p>
              </a>
            </li>
            <li className="footer-list-item">
              <a
                href="https://www.linkedin.com/in/siddhigate/"
                target="_blank"
                className="link"
              >
                <i className="fab fa-linkedin"></i>
                <p>siddhigate</p>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-signoff">
        <div className="footer-text">
          Copyright © 2021 All Rights Reserved by
          <span style={{ fontStyle: "italic" }}> get link preview.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
