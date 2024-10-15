// src/HelloPage.js
import React from 'react';
import HelloPage1 from '../layout/HelloPage1';
import HelloPage2 from '../layout/HelloPage2';
import HelloPage3 from '../layout/HelloPage3';
import {SectionsContainer, Section} from 'react-fullpage';

let options = {
  anchors: ['HelloPage1', 'HelloPage2', 'HelloPage3'],
};

function HelloPage() {
  return (
    <SectionsContainer {...options}>
    <Section>
      <HelloPage1 />
    </Section>
    <Section>
      <HelloPage2 />
    </Section>
    <Section>
      <HelloPage3 />
    </Section>
  </SectionsContainer>
  );
}

export default HelloPage;