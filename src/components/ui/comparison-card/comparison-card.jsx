import React from "react";
import Title, { TitleSize } from "components/ui/title/title";
import { TitleLevel } from "components/ui/title/title";
import { StyledComparisonCard, ComparisonHeader, Image, TitleWrapper, Owner, Text } from "./styles.js"

function ComparisonCard({ title, owner, isNegative, image, about }) {
  return (
    <StyledComparisonCard isNegative={isNegative}>
      <ComparisonHeader>
        <Image
          width={56}
          height={56}
          src={image}
          alt="Причины."
        />
        <div>
          <Owner isNegative={isNegative}>
            {owner}
          </Owner>
          <Title level={TitleLevel.H3} size={TitleSize.SMALL}>
            {title}
          </Title>
        </div>
      </ComparisonHeader>
      <Text
        dangerouslySetInnerHTML={{ __html: about }}
      />
    </StyledComparisonCard>
  );
}

export default ComparisonCard;
