import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
const MainLayout = ({ children }) => (
  <main>
    <Header />
    <section>{children}</section>
    <Footer />
  </main>
);


export default MainLayout;
