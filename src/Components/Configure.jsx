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
      desc: "",
      bodyType: "Sedan, Sport Turismo",
      seats: "4",
      transmission: "Automatic"
    },
    {
      name: "Cayenne",
      fuel: ["Petrol", "Hybrid"],
      image: "https://configurator.porsche.com/_next/image?url=https%3A%2F%2Fiod.prs.porsche.com%2Fiod%2Fimage%2FWW%2F9YADV1%2F1%2FN4Igxg9gdgZglgcxALlAQynAtmgLnaAZxQG0BdAGnDSwFMAnNFUOAExRAFEAPXAZhBUIAB3xFmIAG5p6cDLg6tahANa4RIAL6aqtKJLj1odKAtQg2HAOoALOLgYQIWAIIAbYTaZDRBKMVRtKjdEG3woJHNLZBAAERcATUEQETF-ZiCQYSNWAFcwMxZ2GIBOBJdYgDUARmTUvwDQSFzTegBPAGEIJWsrZKxu2jcE2hkUACYABnGANh80gJIQSYBpASpJgFlajYA5HeXdjuTJgAUZk4AVWOTqgCEV29iAdluAcUnbgBlN293T26nT5UaqnG4gy7rEDVBLAkDjDqvKjjWIAFmS4wAUncMadMRjKgBWDFWC5UPguA58DouZJ8ABiAFU6ZikSA%2BL9ybsAMp0067OncuF8Rno8mw5KolxQ1GxOGozhkkCo%2BnjSVvemSr5K1EARU4ksZmqoqIAGmKQITnryqITMQdCZcABLJQmm45UGYuOEzTgHGb0n30l2et74z0ASShM0xtM9KxKyRmu3DIBmurVntNl2SzxmHpAzxcjyozzeidLa1zjLeudNxNLCQOAA4%2BDiqM3McyO18QyBm9yS-3Ls3ks2AFpKkp3OElWPJEqVL4Lqw5qglccGqguZsFlyVZKxL3JTiTONcTaZkD0zZw%2BmQ5L08dwt7VWtUMMvzYWt6XF-jq8IysKF7QFKhMU4ECnThTFTThFZUT7FYXCVFY7ihFYnQtFYhWSL5f1iAAlZcqAzVNdSdA5dUxC1dV1KjCIrEBdUqKFdXHNlGViA5GVOHjdU4002UqDo4UqQNkkqQixMuJjKisWoyG0HQQEIWhcHCBBGhAGAIHoHAzCyCJklwRh-GEGQ9DMUzclobQgA%3FclientId%3Dicc&w=1080&q=100",
      desc: "The sports Car With Stylish Design And Everyday Practicality",
      bodyType: "Body Type ",
      seats: "4+1",
      transmission: "Automatic"
    },
    {
      name: "Macan",
      fuel: ["Electric"],
      image: "https://configurator.porsche.com/_next/image?url=https%3A%2F%2Fiod.prs.porsche.com%2Fiod%2Fimage%2FWW%2FY1AFL1%2F1%2FN4Igxg9gdgZglgcxALlAQynAtmgLnaAZxQG0BdAGnDSwFMAnNFUOAExRAFEAPXAZhBUIAB3xFmIAG5p6cDLg6tahANa4RIAL6aqtKJLj1odKAtQg2HAOoALOLgYQIWAIIAbYTaZDRBKMVRtKjdEG3woJHNLZBAAERcATUEQETF-ZiCQYSNWAFcwMxZ2GISARhcAMQAZUuTUvwDQSFzTegBPAGEIJWsrZKxu2jcE2hkUACYABnGANh80gJIQSYA5WqpVgCFkyYAVWOTSgHFJw6qALUOVgSpSle3bgAVTp85D3ZuQUoANdZBxjoAdmS41iL3%2BFQAUiCABIgyEPf4ANT%2B4ysAE5knwXH8%2BB0XFiKgSqHwANJHLGPFZYgCKuyxAGVwQAWFzM5LMsEco4VDkASRmHIAqryqMzvp8AKzfDrJSXnR7JGbMpJUGYucEzTh-GYVTVQpVHYkgGZ8z4zSEHNWkgAcSpWsrV3yRyUBM0dIEBLlJrqOmKogJhiMBpM%2BgKFFID33GroS4JtfKFyRtVStIBtu0FVBtSMVVHRksR6JcafRm3B6MhxvRAFlPuikVVkuirPT8%2Bc3lQXDa4V2%2Bf6QC4hX9OJNjZwazGqBVduCjj9kkcYZ8jpC53XFyjF%2BdwXyrJ9IeiaclIZwDzDwZDvuDbQzkqSXFOQKTNp9SUzklUjvsAEpNqg1h0dpUCsVjgjS4zQlQNKjskNKQn8NI0ohP4DjSSKfDSViSskQo0sCVBIh04JInqyRIlBICNk%2BSI-iRmYgGQ2g6CAhC0Lg4QII0IAwBA9A4GYWQRMkuCMP4wgyHoZiibktDaEAA%3FclientId%3Dicc&w=1080&q=100",
      desc: "The  sports car of compact SUVs",
      bodyType: "Body Type",
      seats: "4",
      transmission: "Automatic"
    },
    {
      name: "Cayenne Black Edition",
      fuel: ["Power {PS}"],
      image: "https://configurator.porsche.com/_next/image?url=https%3A%2F%2Fiod.prs.porsche.com%2Fiod%2Fimage%2FWW%2F9YBBN1%2F1%2FN4Igxg9gdgZglgcxALlAQynAtmgLnaAZxQG0BdAGnDSwFMAnNFUOAExRAFEAPXAZhBUIAB3xFmIAG5p6cDLg6tahANa4RIAL6aqtKJLj1odKAtQg2HAOoALOLgYQIWAIIAbYTaZDRBKMVRtKjdEG3woJHNLZBAAERcATUEQETF-ZiCQYSNWAFcwMxZ2GIBOBIAhcoA5AEZk1L8A0Ehc03oATwBhCCVrK2SsHto3BNoZFAAmAAYJgDYfNICSECmAaQEqKYBZOs3a5Kmq8oOABSmDgBVY5Jry1ZvYgHYbgHFzqhqAGQApG7O-64fC4bEA1BLvEATToAVmSE1iEIm32OVAmADVYairIikqiAFpbZJ8Fy7EB8TouIkAMReRO%2BABYiZ9GVQ%2BFVOESAMoQvgAVWerPByXpLhB9IRws4s2FVImwpeVOFn2lVHpAEUOareYrVQANFkgaGPXGG76k6FbSlUaG6zrJWYuCGzTik2ZUp00%2B0ASRBs2%2BgJAs1WJXtVV%2BVFmarlEd1F2Sj1mdqojxc92TLxDyfW8a2mZAj15tOTusx%2BaFVAAHF645XPgAJZIVzlpkAVi4q1t4jslcoQkrfK0gEpolslKw1od4zUgFwVnUzqrJWIw5KcKaDzhbEFUrYQqnA5JUvEQl41IsgF7fE9bA0vC4nvHRkBeqwgs2LqjfThvusQ766iFVmhQdVhcDtVnKEFVjrA1Vm5ZJPjvWIACVPmSNUagDNU61JNUGXQjD0OQvM1TREE1TxAUQF5E5SV5NUqN5XUqLRToITRKlSTRZDzjIbQdBAQhaFwcIECaEAYAgegcDMLIImSXBGH8YQZD0MxFNyWhtCAA%3FclientId%3Dicc&w=1080&q=100",
      desc: "Open luggage compartment volume ",
      bodyType: "Sedan, Sport Turismo",
      seats: "4",
      transmission: "Automatic"
    },
    {
      name: "Cayenne E-Hybrid",
      fuel: ["470 PS"],
      image: "https://configurator.porsche.com/_next/image?url=https%3A%2F%2Fiod.prs.porsche.com%2Fiod%2Fimage%2FWW%2F9YBCT1%2F1%2FN4Igxg9gdgZglgcxALlAQynAtmgLnaAZxQG0BdAGnDSwFMAnNFUOAExRAFEAPXAZhBUIAB3xFmIAG5p6cDLg6tahANa4RIAL6aqtKJLj1odKAtQg2HAOoALOLgYQIWAIIAbYTaZDRBKMVRtKjdEG3woJHNLZBAAERcATUEQETF-ZiCQYSNWAFcwMxZ2GIBOBIAhAGEAFQBGZNS-ANBIXNN6AE9KiCVrK2SsHto3BNoZFAAmAAYJgDYfNICSECnOZKmAaQEqKYBZep2AOQOVw-L1gAUp9eq1qlryjeTa2IB2Z4Bxa-uAGQAJZ6HC7PK4g2LParbEC1BLfEATSrvKgTWJwiYAKXOyIu6OSEwAagBWPFWJEgPguE58SouZJ8ABiHzphzu5IuhzpAGU4XwAKpkviw5IAFhcwpFqJFnFmIvpExFH3pIp%2BMqowoAiqzhbylWqABriqiE9EnQm7AFGvWVZKEgBawKosxccNmnBOs3pLvpuMdHx9IFmAEkobN0eDHRsSslZocOY71fLHXrqslXrNrVRXi4npmPlHM1tU7ymZm9cTM0KqAAOPhYkBVwO85JV-7Nzk5%2BvVVX123dkrlOEldG0qglfE-ZIlKwp0e21kuKsWkAuXknThTEdcXZQ%2Bm7OH0yHJem2uEfWolkAfP5Qv2n3aGy-VROX23PwNWKEmuMgdGcT9-OF0T1OENkJTcNhcbsNnKKENj%2BB8Nm5ZIfg%2BapYgAJQnKhdgmQNknVWp-XVP4TnVE18II-D0PzEB1XxKF1VtMleT4Z9eXVZi9TJfFKjhfFWXxekTnxdC%2BK7EAyG0HQQEIWhcHCBBmhAGAIHoHAzCyCJklwRh-GEGQ9DMHTclobQgA%3FclientId%3Dicc&w=1080&q=100",
      desc: "Acceleration 0-100 km/h with Sport Chrono Package ",
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

