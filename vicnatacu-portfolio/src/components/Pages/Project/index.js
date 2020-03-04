import React from 'react';
import { SectionTitle, Paragraph, More, Hide, GiraffeImg, Pill } from '../../styles';
import { ProfileLink } from './styles';
import {ProjectHeader, GiraffeImg, Ul, Table, Section, ProjectGridLi } from '';
import Button from 'carbon-components-react/lib/components/Button';

export default class Layout extends Component {
    return (
        <ProjectHeader id="proj-h2">Projects</ProjectHeader>
        <SectionTitle>Kate Miller-Heidke Fan Page</SectionTitle>
        <Paragraph>I created this fan page as part of my 100 days Free Codecamp. Kate is one of my favourite
        artists and so I wanted to create a page showcasing my Kate Miller-Heidke stories. Click Kate image.</Paragraph>
        <SectionTitle>Downunder Girl</SectionTitle>
        <Paragraph>This is my personal blogger site.  It features aspects of my life and hobbies. Click Royal Mail image.</Paragraph>
        <SectionTitle>Raelee Design</SectionTitle>
        <Paragraph>This site is a work in progress and part my future goals. Click Meditation image.</Paragraph>
        <Ul>
        <ProjectGrid id="grid" className="hexagon">
        <ProjectClearAfter className="clear:after" >
        <ProjectGridLi id="grid li" className="hexagon">
        <ProfileLink href="http://better-services-portal.herokuapp.com/">
        <Img src="images/fluffy-puppy.jpeg" alt="services portal"/>
        </ProfileLink>
        </ProjectGridLi>
        </ProjectClearAfter>
        </ProjectGrid>
        <ProjectGrid id="grid" className="hexagon">
        <ProjectClearAfter className="clear:after" >
        <ProjectGridLi id="grid li" className="hexagon">
        <ProfileLink href="https://codepen.io/vicnatacu/full/rpZzKr">
        <Img src="images/kate miller-heidke.jpeg" alt="butterfly"/>
        </ProfileLink>
        </ProjectGridLi>
        </ProjectClearAfter>
        </ProjectGrid>
        <ProjectGrid id="grid" className="hexagon">
        <ProjectClearAfter className="clear:after" >
        <ProjectGridLi id="grid li" className="hexagon">
        <ProfileLink href="https://downundergirl.home.blog">
        <Img src="images/vic-london-post-box-cropped.jpg" alt="cat"/>
        </ProfileLink>
        </ProjectGridLi>
        </ProjectClearAfter>
        </ProjectGrid>
        <ProjectGrid id="grid" className="hexagon">
        <ProjectClearAfter className="clear:after" >
        <ProjectGridLi id="grid li" className="hexagon"></ProjectGridLi>     
        </ProjectClearAfter>
        </ProjectGrid>
        <ProjectGrid id="grid" className="hexagon">
        <ProjectClearAfter className="clear:after" >
        <ProjectGridLi id="grid li" className="hexagon"></ProjectGridLi>     
        </ProjectClearAfter>
        </ProjectGrid>
        <ProjectGrid id="grid" className="hexagon">
        <ProjectClearAfter className="clear:after" >
        <ProjectGridLi id="grid li" className="hexagon"></ProjectGridLi>     
        </ProjectClearAfter>
        </ProjectGrid>
        <ProjectGrid id="grid" className="hexagon">
        <ProjectClearAfter className="clear:after" >
        <ProjectGridLi id="grid li" className="hexagon">
        <ProfileLink href="https://vicnatacu.github.io/raelee.design/">
        <Img src="images/meditation-image.jpeg" alt="fluffy-puppy"/>
        </ProfileLink>
        </ProjectGridLi>
        </ProjectClearAfter>
        </ProjectGrid>
        <ProjectGrid id="grid" className="hexagon">
        <ProjectClearAfter className="clear:after" >
        <ProjectGridLi id="grid li" className="hexagon"></ProjectGridLi>     
        </ProjectClearAfter>
        </ProjectGrid>     
        </Ul>
    )
}