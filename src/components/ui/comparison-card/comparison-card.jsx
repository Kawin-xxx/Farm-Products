import React from "react";
import Title, { TitleSize } from "/src/components/ui/title/title";
import { TitleLevel } from "/src/components/ui/title/title";
import "./style.css";

function ComparisonCard({ title, owner, isNegative, image, about }) {
  return (
    <section
      className={`comparison-card ${
        isNegative ? " comparison-card_negative" : ""
      }`}
    >
      <header className="comparison-card__header">
        <img
          className="comparison-card__img"
          width={56}
          height={56}
          src={image}
          alt="Еда намного вкуснее"
        />
        <div>
          <span
            className={`comparison-card__owner ${
              isNegative ? " comparison-card__owner_negative" : ""
            }`}
          >
            {owner}
          </span>
          <Title level={TitleLevel.H3} size={TitleSize.SMALL}>
            {title}
          </Title>
        </div>
      </header>
      <p
        className="comparison-card__text"
        dangerouslySetInnerHTML={{ __html: about }}
      />
    </section>
  );
}

export default ComparisonCard;
