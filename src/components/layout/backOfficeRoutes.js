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
import ProtectedAdmin from '../ProtectedRoutes/ProtectedAdmin';

function BackOfficeRoutes(){ 
  return (
    <>
      <Route path="/back-office/testimonials"
        exact
      >
        <ProtectedAdmin component={TestimonialPage}/>
      </Route>

      <Route
        path="/back-office/news/:id"
      >
        <ProtectedAdmin component={NewsBackOfficeEditPage}/>
      </Route>

      <Route
        path="/back-office/news"
        exact
      >
        <ProtectedAdmin component={NewsBackOfficePage}/>
      </Route>

      <Route
        path="/back-office/organization/:id"
      >
        <ProtectedAdmin component={EditOrganizationPage}/>
      </Route>

      {/* PAGE TO LIST ALL THE ORGANIZATIONS IS MISSING */}
      <Route
        path="/back-office/organization"
        exact
      >
        <ProtectedAdmin component={EditOrganizationPage}/>
      </Route>

      <Route
        path="/back-office/activity/:id"
      >
        <ProtectedAdmin component={EditActivityPage}/>
      </Route>

      <Route
        path="/back-office/activity"
        exact
      >
        <ProtectedAdmin component={ActivityBackOffice}/>
      </Route>

      {/* IMPLEMENT BACK-OFFICE COMPONENT */}
      <Route path="/back-office" exact >
        <ProtectedAdmin component={HomePage}/>
      </Route>
    </>
  );
}

export default BackOfficeRoutes;
