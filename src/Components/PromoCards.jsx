import React from "react";
import "./PromoCards.css";

const PromoCards = () => {
  return (
    <div className="promo-container">
      {/* Card 1 */}
      <div className="promo-card">
        <img
          src="https://sccar.sk/wp-content/uploads/2022/08/004Porsche-911-Carrera-agate-grey-uai-1400x787.jpg"
          alt="Porsche E-Performance"
          className="promo-image"
        />
        <div className="promo-content">
          <h3>Porsche 
            <br></br>
            E-Performance.</h3>
          <br></br>
          <p>
            Porsche Approved includes both allelectric and plug-in hybrid
            models. The specially adapted 111-point check includes, among other
            things, checking Your Porsche Centre also
            provides advice and lling the charging equipment at
            home.
          </p>
          <br></br>
          <a href="/e-performance" className="promo-link">
            → Read more
          </a>
        </div>
      </div>

      {/* Card 2 */}
      <div className="promo-card">
        <img
          src="https://ams-kfz-werkstatt.de/wp-content/uploads/2023/07/911-Carrera-2-targa-Typ-964-4.1-im-Retro-Rueckbau-von-AMS-Racing-6966-1400x787.jpg"
          alt="Porsche Tequipment Accessories"
          className="promo-image"
        />
        <div className="promo-content">
          <h3>Porsche Tequipment Genuine Accessories.</h3>
          <br></br>
          <p>
            You can adapt your vehicle to your wishes with high-quality products
            from Po jiuhuh rsche Tequipment Genuine Accessories, offering products that
            are perfect for you and your Porsche. Just ask our staff and become
            inspired.
          </p>
          <br></br>
          <a href="/tequipment" className="promo-link">
            → Read more
          </a>
          <br></br>
        </div>
      </div>
    </div>
  );
};

export default PromoCards;




