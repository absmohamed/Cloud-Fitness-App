import styled from 'styled-components';
import {white} from '@carbon/colors';


export const Body = styled.div`
background: $main-bgcolor;
margin: 0px;
padding: 0px;
`;

export const Section = styled.div`
section {
    width: 100%;
}
`;

export const PageContainer = styled.div`
display: flex;
flex-wrap: wrap;
align-content: space-between;
@include desktop {
    font-size: 1.5em;
}`;

export const HomeContainer = styled.div`
#home-container {
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    height: 85vh;
    background-color: $main-bgcolor;
    @include desktop {
        font-size: 1.5em;
    }
    
    #bg-img {
        opacity: 0.5;
        width: 100vw;
        height: 50vh;
        padding: 5px 0;
        margin: 40px 0;
        @include desktop {
            height: auto;
        }
      
    }
}
`;

export const HeaderContainer = styled.div`
background-color: #F2F2F2;
font-family: $main-font-family;
font-style: $main-font-style;
color: $main-color;
margin: 0;
padding: 5px 20px;
width: 100%;
h1  {
    font-size: 2em;
}
`;

export const Header = styled.div`
display: flex;
@media (max-width: 640px) {
    flex-direction: column;
}
`;

export const ContactContainer = styled.div`
#contact-container {
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    @include desktop {
        font-size: 1.5em;
    }
    
   
    
}
`;

export const ContactHeader = styled.div`
#c-h {
    @include h2-style;
    color: $navtext-color;
    
}
`;

export const Ul = styled.div`
ul {
    list-style-type: none;
}
`;

export const SocialUl = styled.div`
#social-ul {
    display: flex;
    height: 55vh;
    max-width: 900px;
    margin: 20px auto;
    padding: 0;
    font-size: 10px;
    background-color: $nav-hover;
    justify-content: center;

  
    
    .social-item {
        display: flex;
        width: 25%;
        vertical-align: middle;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        align-items: center;
        
        
    }
    .soc-cell {
        margin: 12px;
        box-shadow: 0 0 6px $pale-pink;
        display: block;
        position: relative;
        overflow: hidden;
    }
    .social-img {
        display: block;
        width: 100%;
        height: auto;
        border: none;
        transform: scale(1);
        transition: all 1s;
        
        
    }
    .soc-overlay {
        position: absolute;
        display: block;
        top: 0;
        left: 0;
        bottom: 0;
        margin: auto;
        background: $hexagon-color no-repeat center 20%;
        width: 250px;
        height: 250px;
        opacity: 0;
        transition: all 0.6s;
    }
    .soc-text {
        display: block;
        padding: 0 30px;
        box-sizing: border-box;
        position: absolute;
        left: 0;
        width: 100%;
        text-align: center;
        text-transform: normal;
        font-size: 1em;
        font-weight: bold;
        font-family: $main-font-family;
        font-weight: normal !important;
        top: 40%;
        color: black;
        opacity: 0;
        transform: translateY(-20px);
        transition: all .3s;
    }
}
`;

export const SocialUlHover = styled.div`
#social-ul .social-item:hover {
    .social-img {
        transform: scale(1.05);
        
    }
    .soc-overlay {
        opacity: 0.8;
        // background-color: $contact-title;
    }
    .soc-text {
        transform: translateY(0px);
        opacity: 0.9;
    }
    @media (max-width: 900px) {
        .social-item {
            width: 25%;
        }
    }
    @media (max-width: 700px) {
        .social-item {
            width: 33.33%;
        }
        
    }
    @media (max-width: 550px) {
        .social-item {
            width: 50%;
        }
    }
}
`;

export const AboutHeader = styled.div`
#h-a {
    @include h2-style;
    color: $pale-pink;
}
`;

export const More = styled.div`
.more {
    display: none;

    &.myBtn {
        display: inline-block;

    }
}
`;

export const Hide = styled.div`
.hide-me {
    display: none;
}
`;

export const GiraffeImg = styled.img`
#giraffe-img {
    border-radius: 100%;
    margin-left: auto;
    padding: 20px;
    

}
`;
export const About 




export const ResponsiveImg = styled.img`
.responsive img {
    display: inline-block !important;
    float: right;
    padding-right: 10px;
    height: 40px;
    width: auto;
    
}

`;

export const Essence = styled.div`
#essence {
    display: flex;
    font-family: $secondary-font-family;
    color: $navbar-bgcolor;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 25px;
    font-size: 1em;
    @include desktop {
        font-size: 1.75em;
    }
    
  
}
`;

export const TopNav = styled.div`
.topnav {
    background-color: $navbar-bgcolor;
    overflow: hidden;
    margin: 0px;
    padding: 14px 14px;
    @include mobile {
        a:not(:first-child) {display: none;}
        a.icon {
            float: right;
            display: block;
        }
        &.responsive {
            position: relative;
            a {
                float: none;
                display: block;
                text-align: left;
                &.icon {
                    position: absolute;
                    right: 0;
                    top: 0;
                }
            }
        }
    }
}
`;

export const TopNavA = styled.div`
.topnav a {
    float: left;
    display: block;
    color: $navtext-color;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    img {
        display: none;
    } 
    
}
`;

export const TopNavHover = styled.div`
.topnav a:hover {
    background-color: $nav-hover;
    color: $navtext-color;
}
`;

export const TopNavActive = styled.div`
.active {
    background-color: $nav-active;
    color: $nav-active;
}
`;

export const TopNavIcon = styled.div`
.topnav .icon {
    display: none;
}
`;

export const Flower = styled.img`
#flower {
    padding: 0px;
    padding-right: 5px;
}
`;

export const ViewResumeLink = styled.a`
display: flex;
text-decoration: none;
padding: 0.75rem 1.5rem;
font-weight: bold;
align-items: center;
margin-top: 1rem;
border: 2px solid #368F96;
background-color: rgba(133, 196, 201, 79, 0.3);
transition: background-color 250ms ease;
&:hover {
    background-color: #85C4C9;
}
svg {
    fill: white;
    margin-left: 8px;
}
`;

export const PageContainer = styled.div`
#projects-container {
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    @include desktop {
        font-size: 1.5em;
    }
    h3, p {
        font-family: $main-font-family;
        font-style: $main-font-style;
        width: 80%;
        margin-left: 30px;
        margin-top: 5px;
        
        
    }

}
`;

export const ProjectHeader = styled.div`
#proj-h2 {
    @include h2-style;
    width:100%;
    color: $hexagon-color;
    
}
`;

export const ProjectGrid = styled.div`
#grid {
    position: relative;
    width: 60%;
    height: 35vh;
    margin: auto;
    padding: 15px; /* Clears unordered list default */
    @include beehive;
    padding-top: 30px;
    @include desktop{
        height: auto;
       
    }
}
`;

export const ProjectClearAfter = styled.div`
.clear:after {
    content: "";
    display: block;
    clear: both;
}
`;

export const ProjectGridLi = styled.div`
#grid li {
    list-style-type: none;
    position: relative;
    float: left;
    width: 27.85714285714286%;
    padding: 0 0 32.16760145166612% 0;
    transform: rotate(-60deg) skewY(30deg);
    overflow: hidden;
    // visibility: hidden;
    .hexagon {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: $hexagon-color;
        background-size: auto 100%;
        background-position: cover;
        display: inline-block;
        transform: skewY(-30deg) rotate(60deg);
        overflow: hidden;
        .hexagonimg {
            height: 100%; 
            width: auto;
        }
    }
} 
`;


export const Footer = styled.div`
align-self:end;
padding: 5px 10px;
background-color: $main-bgcolor;
border-top: 3px solid $header-bgcolor;
font-family: $secondary-font-family;
width: 100%;
`;