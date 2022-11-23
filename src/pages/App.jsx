import React from "react";
import { AboutSection, Hero, Ministry, Ukm } from "../components/organisms";
import { MainLayout } from "../layouts";

const App = () => {
  return (
    <>
      <MainLayout>
        <Hero />
        <AboutSection />
        <Ministry />
        <Ukm />
      </MainLayout>
    </>
  );
};

export default App;
