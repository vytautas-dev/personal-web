import React from 'react';
import { useSpring } from "react-spring";
import { IconContext } from 'react-icons/lib';
import { SkillsContainer, SkillsHeading, SkillsSection, SkillsWrapper } from './Skills.elements';
import { skillObjFive, skillObjFour, skillObjOne, skillObjSix, skillObjThree, skillObjTwo } from './Data';
import SkillsCard from './SkillsCard';
import { opacity } from '../animations';



function Skills() {

  const props = useSpring(opacity);

  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <SkillsSection>
        <SkillsWrapper style={props}>
          <SkillsHeading>My basic skills</SkillsHeading>
          <SkillsContainer>
          <SkillsCard {...skillObjOne}/>
          <SkillsCard {...skillObjTwo}/>
          <SkillsCard {...skillObjThree}/>
          <SkillsCard {...skillObjFour}/>
          <SkillsCard {...skillObjFive}/>
          <SkillsCard {...skillObjSix}/>       
          </SkillsContainer>
        </SkillsWrapper>
      </SkillsSection>
    </IconContext.Provider>
  );
}
export default Skills;