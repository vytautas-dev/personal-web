import React from "react";
import { Button } from "../../globalStyles";
import {
  SkillsCardContainer,
  SkillsCardInfo,
  SkillsCardIcon,
  SkillsCardCost,
  SkillsCardFeatures,
  SkillsCardFeature,
} from "./Skills.elements";

const SkillsCard = ({ skillName, skillFeatures, icon, docs }) => {
  return (
    <SkillsCardContainer href={docs} target='_blank'>
      <SkillsCardInfo>
        <SkillsCardIcon>{icon}</SkillsCardIcon>
        <SkillsCardCost>{skillName}</SkillsCardCost>
        <SkillsCardFeatures>
          {skillFeatures.map((skill) => {
            return <SkillsCardFeature key={skill}>{skill}</SkillsCardFeature>;
          })}
        </SkillsCardFeatures>
        <Button primary>Docs</Button>
      </SkillsCardInfo>
    </SkillsCardContainer>
  );
};

export default SkillsCard;
