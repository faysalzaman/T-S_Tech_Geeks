/* eslint-disable no-unused-vars */
import React from "react";
import "./index.css";
import "./main.jsx";
import ImageWithText from "./components/image_with_text.jsx";
import Header from "./components/header.jsx";
import CapabilityText from "./components/capability_text.jsx";
import ContactForm from "./components/contact_form.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import FeatureCard from "./components/feature_card.jsx";
import SimplifyingText from "./components/simplifying_text.jsx";
import IntroSection from "./components/intro_section.jsx";
import MeetSolution from "./components/meet_solution.jsx";
import PartnerLogos from "./components/partner_logo.jsx";
import PartnerText from "./components/partner_text.jsx";
import AllRightReserved from "./components/all_right_reserved.jsx";

const features = [
  {
    icon: "fa-network-wired",
    title: "NETWORKING",
    description:
      "Connecting computers, buildings and branch offices to improve connectivity and productivity. Keeping computers and users safe from hacks, malware and websites.",
  },
  {
    icon: "fa-wifi",
    title: "WIFI & POINT-POINT",
    description:
      "Point to point wireless network or Point to Multi Point wireless networks. Operating in unlicensed/licensed radio frequencies with speeds available between 100mbps to 10Gbps.",
  },
  {
    icon: "fa-desktop",
    title: "COMPUTERS",
    description:
      "Custom computer built for our customers with the best array of component available today. We also deal with all the major computer suppliers for a standard system.",
  },
  {
    icon: "fa-phone-alt",
    title: "VOICE & DATA",
    description:
      "One network for all services. Phone systems, video conferencing, video security, and IP-enabled.",
  },
];

function App() {
  return (
    <div className="App bg-gray-100">
      <Header />
      <ImageWithText />
      <CapabilityText />
      <IntroSection />
      <SimplifyingText />
      <div className="min-h-screen bg-white flex flex-col items-center justify-center py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
      <MeetSolution />
      <PartnerText />
      <PartnerLogos />
      <ContactForm />
      <AllRightReserved />
    </div>
  );
}

export default App;
