import React from "react";
import Title, { TitleSize } from "components/ui/title/title";
import ComparisonCard from "components/ui/comparison-card/comparison-card";
import Button from "components/ui/button/button";
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
