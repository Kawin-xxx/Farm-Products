import React from "react";
import About from "/src/components/blocks/about/about";
import Comparison from "/src/components/blocks/comparison/comparison";
import comparisonList from "/src/mocks/comparison";
import { TitleLevel } from "/src/components/ui/title/title";
import "./style.css";

function MainPage() {
  return (
    <>
      <About level={TitleLevel.H1} />
      <Comparison level={TitleLevel.H2} comparisons={comparisonList} />
    </>
  );
}

export default MainPage;
