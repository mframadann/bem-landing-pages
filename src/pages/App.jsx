import React from "react";
import { AboutSection, Hero, Ministry } from "../components/organisms";
import { MainLayout } from "../layouts";

const App = () => {
  return (
    <>
      <MainLayout>
        <Hero />
        <AboutSection />
        <Ministry />
      </MainLayout>
    </>
  );
};

export default App;
