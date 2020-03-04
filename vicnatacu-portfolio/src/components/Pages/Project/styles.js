import styled from 'styled-components'
import { white } from '@carbon/colors'

export const ProjectHeader = styled.div`
#proj-h2 {
    @include h2-style;
    width:100%;
    color: $hexagon-color;
    
}
`;

export const Ul = styled.div`
ul {
    list-style-type: none;
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

export const ProjectGridLi = styled.li`
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
        img {
            height: 100%; 
            width: auto;
        }
    }
} 
`;
