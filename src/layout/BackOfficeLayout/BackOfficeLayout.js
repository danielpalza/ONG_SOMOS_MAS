import React from 'react';
import TemporalSidebar from './temporalSidebar';
const BackOfficeLayout = ({ children }) => (
  <div id="wrapper">
    <TemporalSidebar />
    <div id="content">{children}</div>
  </div>
);

export default BackOfficeLayout;
