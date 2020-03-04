import React, { Component } from 'react';
import './App.css';
import Sidebar from '../Sidebar'
import MobileNav from '../MobileNav'
import Pages from '../Pages'
import {Layout, HomeContainer, Header, Footer} from ''





export default class Layout extends Component {
    render () {
        return (
            <Pages/>
            <Sidebar/>
            <MobileNav/>
            <HomeContainer id="home-container">
                <Header>Vicnatacu</Header>
            </HomeContainer>
            <Footer>&copy; Vicnatacu 2020</Footer>  
        )
    }
}

