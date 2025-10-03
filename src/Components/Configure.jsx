import React from "react";
import "./Configure.css";

const ConfigurePage = () => {
  const models = [
    {
      name: "718",
      fuel: ["Petrol"],
      image: "https://configurator.porsche.com/_next/image?url=%2Fmodel-start%2Fimages%2F911%2Fextcam03.webp&w=1080&q=100",
      desc: "The mid-engine sports car for two",
      bodyType: "Coupe, Cabriolet",
      seats: "2",
      transmission: "Automatic, Manual"
    },
    {
      name: "911",
      fuel: ["Petrol"],
      image: "https://a.storyblok.com/f/285489813253582/5000x1390/f1c13bd88c/model-y1adj1-2026-side-shot_371f2173cc2e4428af78d1aa95012e9a.png/m/1200x334/smart/filters:format(avif)",
      desc: "The quintessential, rear engine sports car",
      bodyType: "Coupe, Cabriolet, Targa",
      seats: "2+2",
      transmission: "Automatic, Manual"
    },
    {
      name: "Taycan",
      fuel: ["Electric"],
      image: "https://configurator.porsche.com/_next/image?url=https%3A%2F%2Fiod.prs.porsche.com%2Fiod%2Fimage%2FIN%2FY1AAI1%2F1%2FN4Igxg9gdgZglgcxALlAQynAtmgLnaAZxQG0BdAGnDSwFMAnNFUOAExRAFEAPXAZhBUIAB3xFmIAG5p6cDLg6tahANa4RIAL6aqtKJLj1odKAtQg2HAOoALOLgYQIWAIIAbYTaZDRBKMVRtKjdEG3woJHNLZBAAERcATUEQETF-ZiCQYSNWAFcwMxZ2GISARhcXAElS5NS-ANBIXNN6AE8AYQglDkqAOWSsLto3BNoZFAAmAAYJgDYfNICSECnemqpVgCFkqYAVWOTSgHFZw4AZAGVD3oEqUt6XQ4AFKefOQ93bkFKADQnkibtADsANiryoEwAUtsIQA1L4TKwATgBAC0YSA%2BJsACzJPjtR5UPgAMSOeMhuKJAGkyUSnv0iQBFXZ4i6UkDYlxfbFg5LYyrcgCqxL5P3ZAFYfu1krNsaiZS5wSBZpx1sriUrZqSZUdCcrKprIQcqLMqQAOGW9SEygBK0pNP1hySBswAEs6XFTna69UCqV8gQBZFFUIGC2kgIF-Z0JJVmyosqhms56s27U5J2ERpHivVI2ZTEVUJGbJVIyF5wNfJGwr3FqyJkBI1HvKguM32kAVZKcKZ6ziB-5UTiwpXE3Zj1FKo6-ZJHEMgI6Q6eB9lHWFqo5T5KVM3yqiVWELypWJWQpGtkCQ11nn5K81XKhUlxDkBUzZfKmu8XJKkXJVnEc%2Bw2mcySBqU1pUL0p7JIyUKwb2sGQj%2BVCMoyaqMjaFqofCySCryVCCk8C6wu0SqwhqySwmcr6wja5FWD%2BZDaDoICELQuDhAgDQgDAED0DgZhZBEyS4Iw-jCDIehmGJuS0NoQA%3FclientId%3Dicc&w=1080&q=100",
      desc: "The pure expression of an electric sports car",
      bodyType: "Sedan, Cross Turismo",
      seats: "4",
      transmission: "Automatic"
    },
    {
      name: "Panamera",
      fuel: ["Petrol", "Hybrid"],
      image: "https://a.storyblok.com/f/285489813253582/5000x1795/bb53c49791/model-9yabs1-2026-side-shot_47345421736b44939d5408a146f21153.png/m/1200x431/smart/filters:format(avif)",
      desc: "The four-seater sports car with style and comfort",
      bodyType: "Sedan, Sport Turismo",
      seats: "4",
      transmission: "Automatic"
    }
  ];

  return (
    <div className="configure-page">
      <h1>Select a Model Series</h1>
      <div className="models-grid">
        {models.map((model, idx) => (
          <div className="model-card" key={idx}>
            <h2>{model.name}</h2>
            <div className="fuel-tags">
              {model.fuel.map((fuel, i) => (
                <span key={i} className="fuel-tag">{fuel}</span>
              ))}
            </div>
            <div className="car-image">
              <img src={model.image} alt={model.name} />
            </div>
            <p className="desc">{model.desc}</p>
            <div className="details">
              <div><strong>{model.bodyType}</strong><br />Body Type</div>
              <div><strong>{model.seats}</strong><br />Seats</div>
              <div><strong>{model.transmission}</strong><br />Transmission</div>
            </div>
            <button className="configure-btn">Configure your {model.name}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConfigurePage;

