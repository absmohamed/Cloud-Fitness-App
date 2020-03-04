import styled from 'styled-components'
import { Content } from 'carbon-components-react/lib/components/UIShell'

export const StyledContent = styled(Content)`
min-height: 100vh;
display: flex;
flex-wrap: wrap;
align-content: space-between;
background: $main-bgcolor;
@include desktop {
    font-size: 1.5em;
}
  @media (max-width: 640px) {
    margin-left: 0 !important;
  }
`;

export const PageContainer = styled.div`
display: flex;
flex-wrap: wrap;
align-content: space-between;
@include desktop {
    font-size: 1.5em;
}`;

