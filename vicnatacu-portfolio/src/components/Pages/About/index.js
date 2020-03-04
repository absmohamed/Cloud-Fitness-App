import React from 'react';
import Layout from './Layout'
import Pages from './Pages'
import { SectionTitle, Paragraph, More, Hide } from '../../styles';
import { ProfileLink } from './styles';
import { PageContainer, AboutHeader, GiraffeImg, Ul, Table } from '../../../../public/styles/styles';
import Button from 'carbon-components-react/lib/components/Button';



export default class Layout extends Component {
    render () {
        return (
            <Layout/>
            <Pages/>
            <PageContainer/>
            <SkillContainter>
            <Header/>
            
            
            <AboutHeader>About Vic</AboutHeader>
            <GiraffeImg src="images/baby_giraffe-trans.png" alt="baby giraffe"/>
            <ProfileLink></ProfileLink>
            <SectionTitle>About Me</SectionTitle>
            
            <Paragraph>My strongest value is in the service of others. I like to develop relationships of trust
            and integrity. Contribution and adding value when I can organically, is important to me.
            <Hide className="hide-me">I gain balance from spending time in nature, doing
            meditation, yoga and spending time with
            family and friends. I am a bit of foodie and I am great at adjusting your favourite recipes
            to gluten-free, dairy-free. Primarily, I am looking for opportunities as UX/UI Designer or
            coder.
            Ultimately, I would like to work as a Designer for a Blockchain Technology Company
            working for social good.
            </Hide>
            </Paragraph>
            <More className="more"><Button onclick="readFunction('me','meBtn')" id="meBtn">more</Button></More>
    
            <SectionTitle>Values</SectionTitle>
            <Ul><Hide className="hide-me">
            <Item>Connections - Family &amp; Friends</Item>
            <Item>Relationships - Ones of Integrity</Item>
            <Item>Service to Others </Item>
            <Item>Contribution</Item>
            <Item>Adding Value</Item>
            <Item>Achievement</Item>
            <Item>Self-Care</Item>
            </Hide></Ul>
            <More className="more"><Button onclick="readFunction('me','meBtn')" id="meBtn">more</Button></More>
            
            <SectionTitle>Professional</SectionTitle>
           
            <Table className="about">
            <tr>
            <th>Date</th>
            <th>Details</th>
            </tr>
            <tr>
            <td>1990-93</td>
            <td>Worked in Advertising</td>
            </tr>
            <tr>
            <td>2002-2005</td>
            <td>Volunteered B105 Christmas Appeal, Marketing</td>
            </tr>
            <tr>
            <td>2017</td>
            <td>Global Teach Stars Women's Startup Weekend</td>
            </tr>
            <tr>
            <td>2016-Now</td>
            <td>Attending Meetups & Eventbrite events; Tech, Coding, Women, UX/UI Design, Blockchain</td>
            </tr>
            <tr>
            <td>Continual</td>
            <td>Self-Learning; Peronsal, Design, Programming</td>
            </tr>
            <tr>
            <td>Currently</td>
            <td>Coder Academy; Bootcamp Gen Tech 2019-01</td>
            </tr>
            </Table>
            </SkillContainter>
        )
    
            
            
    }
}