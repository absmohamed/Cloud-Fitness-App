

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