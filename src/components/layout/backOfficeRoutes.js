import React from 'react';

/* Componentes */
import HomePage from '../../pages/homeScreen/homeScreen';
import EditActivityPage from '../../pages/Forms/ActivityForm';
import ActivityBackOffice from '../../pages/BackofficePages/BackofficeActivities/BackofficeActivities';
import EditOrganizationPage from '../../pages/Forms/EditOrganization/EditOrganization';
import NewsBackOfficePage from '../../pages/BackofficePages/NewsBack/NewsBack';
import NewsBackOfficeEditPage from '../../pages/Forms/NewsForm/NewsForm';
import TestimonialPage from '../../pages/BackofficePages/TestimonialBack/testimonials';

/* Modulos */

import { Switch, Route } from 'react-router-dom';

const BackOfficeRoutes = [
  <Route
    key="back-office/testimonials"
    path="/back-office/testimonials"
    exact
    component={TestimonialPage}
  />,

  <Route
    key="back-office/news/:id"
    path="/back-office/news/:id"
    component={NewsBackOfficeEditPage}
  />,

  <Route
    key="back-office/news"
    path="/back-office/news"
    exact
    component={NewsBackOfficePage}
  />,

  <Route
    key="back-office/organization/:id"
    path="/back-office/organization/:id"
    component={EditOrganizationPage}
  />,

  // {/* PAGE TO LIST ALL THE ORGANIZATIONS IS MISSING */}
  <Route
    key="back-office/organization"
    path="/back-office/organization"
    exact
    component={EditOrganizationPage}
  />,
  <Route
    key="back-office/activity/:id"
    path="/back-office/activity/:id"
    component={EditActivityPage}
  />,
  <Route
    key="back-office/activity"
    path="/back-office/activity"
    exact
    component={ActivityBackOffice}
  />,

  // {/* IMPLEMENT BACK-OFFICE COMPONENT */}
  <Route key="back-office" path="/back-office" exact component={HomePage} />,
];

export default BackOfficeRoutes;
