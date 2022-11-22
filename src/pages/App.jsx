import React from "react";
import { AboutSection, Hero } from "../components/organisms";
import { MainLayout } from "../layouts";

const App = () => {
  return (
    <>
      <MainLayout>
        <Hero />
        <AboutSection />
      </MainLayout>
    </>
  );
};

export default App;
