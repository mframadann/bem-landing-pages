import React from "react";
import {
  AboutSection,
  Hero,
  Ministry,
  More,
  Ukm,
} from "../components/organisms";
import { MainLayout } from "../layouts";

const App = () => {
  return (
    <>
      <MainLayout>
        <Hero />
        <AboutSection />
        <Ministry />
        <Ukm />
        <More />
      </MainLayout>
    </>
  );
};

export default App;
