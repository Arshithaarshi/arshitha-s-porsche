import React from "react";
import "./SupportFooter.css"; // <-- make sure to create & import CSS file

const SupportFooter = () => {
  return (
    <>
      {/* ================= SUPPORT SECTION ================= */}
      <section className="support-sections">
        <h1>Get Personalized Support</h1>
        <p>
          Discover how to get the help you need. Porsche Assist offers personalized
          support for your vehicle and services. Alternatively, sign in and use our
          web form to ask about a variety of topics.
        </p>
        <button className="supports-btn">Explore Contact Options</button>
      </section>

      {/* ================= FOOTER SECTION ================= */}
      <footer className="footer-sections">
        <div className="footer-tops">
          
          {/* ==== LEFT: Location + Map ===== */}
          <div className="footer-location">
            <p>
              Your closest Porsche Showroom is <strong>Dubai Sheikh Zayed Road</strong>
            </p>
            <p><strong>Dali Shili Hilton Hotel Supercharger</strong></p>
            <br></br>

            <iframe
              title="porsche-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.301238617761!2d55.269441!3d25.197515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDExJzUxLjAiTiA1NcKwMTYnMDkuOSJF!5e0!3m2!1sen!2sin!4v1700000000000"
              width="350"
              height="250"
              style={{ border: 0, borderRadius: "8px" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* ==== RIGHT: Footer Link Columns ===== */}
          <div className="footer-links">
            <div className="col">
              <a href="#">Taycan</a>
              <a href="#">911</a>
              <a href="#">718 Cayman</a>
              <a href="#">Panamera</a>
              <a href="#">Macan</a>
              <a href="#">Cayenne</a>
            </div>

            <div className="col">
              <a href="#">About</a>
              <a href="#">Careers</a>
              <a href="#">Get Newsletter</a>
              <a href="#">Contact</a>
              <a href="#">My Porsche</a>
            </div>
          </div>
        </div>

        {/* ==== Bottom Copyright Area ===== */}
        <div className="footer-bottom">
          <p>Porsche © 2025 | Privacy & Legal</p>
        </div>
      </footer>
    </>
  );
};

export default SupportFooter;
