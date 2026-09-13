import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import ThesisSection from "./components/ThesisSection.jsx";
import FiveCoordinates from "./components/FiveCoordinates.jsx";
import KnowledgeMap from "./components/KnowledgeMap.jsx";
import InventionBlueprints from "./components/InventionBlueprints.jsx";
import FrontierRadar from "./components/FrontierRadar.jsx";
import WorkshopsSection from "./components/WorkshopsSection.jsx";
import EventDiscovery from "./components/EventDiscovery.jsx";
import ArchiveSection from "./components/ArchiveSection.jsx";
import TimeCapsule from "./components/TimeCapsule.jsx";
import FinalCTA from "./components/FinalCTA.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <ThesisSection />
        <FiveCoordinates />
        <KnowledgeMap />
        <InventionBlueprints />
        <FrontierRadar />
        <WorkshopsSection />
        <EventDiscovery />
        <ArchiveSection />
        <TimeCapsule />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
