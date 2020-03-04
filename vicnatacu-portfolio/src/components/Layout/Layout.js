import React from 'react';
import Sidebar from '../Sidebar';
import MobileNav from '../MobileNav';
import Pages from '../Pages'


import { StyledContent, HomeContainer, Header, Footer } from './styles';
import PageComponentName from '../Pages/<PageComponentName>';

const Layout = ( children ) => {
  return (
    <PageComponentName>
        <StyledContent/>
        <Pages/>
        <HomeContainer/>
        <Sidebar/>
        <MobileNav/>
        <Header/>
        <Footer/>

    </PageComponentName>
  )

};


export default Layout;