import React from 'react';
import InfoSection from '../../components/InfoSection/InfoSection';
import { projectObjOne, projectObjThree, projectObjTwo } from './Data';

function ProjectsPage() {
  return (
    <>
      <InfoSection {...projectObjOne} />
      <InfoSection {...projectObjTwo} />
      <InfoSection {...projectObjThree} />
    </>
  );
}

export default ProjectsPage;