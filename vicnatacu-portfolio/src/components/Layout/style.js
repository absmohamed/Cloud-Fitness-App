import styled from 'styled-components'
import { Content } from 'carbon-components-react/lib/components/UIShell'

export const StyledContent = styled(Content)`
  min-height: 100vh;
  background: $main-bgcolor;
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  @include desktop {
      font-size: 1.5em;
  }
  @media (max-width: 640px) {
    margin-left: 0 !important;
  }
`;

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

export const Header = styled.div`
display: flex;
@media (max-width: 640px) {
    flex-direction: column;
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
