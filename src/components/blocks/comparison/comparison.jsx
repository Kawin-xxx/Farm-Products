import React from "react";
import Title, { TitleSize } from "/src/components/ui/title/title";
import ComparisonCard from "/src/components/ui/comparison-card/comparison-card";
import Button from "/src/components/ui/button/button";
import { ComparisonListSection, ComparisonsList } from "./styles";

function Comparison({ comparisons, level }) {
  return (
    <ComparisonListSection>
      {comparisons?.length ? (
        <>
          <Title level={level}>Почему фермерские продукты лучше?</Title>
          <ComparisonsList $isGridList>
            {comparisons.map((comparison) => (
              <li key={comparison.id}>
                <ComparisonCard {...comparison} />
              </li>
            ))}
          </ComparisonsList>
          <Button minWidth={260} link="/buy">
            Купить
          </Button>
        </>
      ) : null}
    </ComparisonListSection>
  );
}

export default Comparison;
