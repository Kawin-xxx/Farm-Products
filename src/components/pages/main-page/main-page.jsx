import React from "react";
import About from "components/blocks/about/about";
import Comparison from "components/blocks/comparison/comparison";
import comparisonList from "mocks/comparison";
import { TitleLevel } from "components/ui/title/title";

function MainPage() {
  return (
    <>
      <About level={TitleLevel.H1} />
      <Comparison level={TitleLevel.H2} comparisons={comparisonList} />
    </>
  );
}

export default MainPage;
