import styled from 'styled-components'
import { white } from '@carbon/colors'

export const Item = styled.li`
  margin-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${white};
`

export const AboutMeTitle = styled.h4`
  font-weight: bold;
`

export const ProfileLink = styled.li`
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  display: inline-block;
  font-size: 18px;
`

export const SkillContainer = styled.div`
  margin-top: 1.2rem;
`
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

export const Ul = styled.div`
ul {
    list-style-type: none;
}
`;

export const Table = styled.div`
.about {
    width: 80%;
    background: white !important;
    margin: 10% auto;
    padding: 20px;
    display: flex;
    flex-direction: column;

    ul {
        display: block;
        width: 100%;
        padding-left: 20px;

    }

    table {
        th {
            padding: 12px 6px;
            text-align: left;
            background-color: #A974C4;
            color: white;
        }

        td {
            border: 1px solid #ddd;
            padding: 8px;
        }

        tr:nth-child(even) {
            background-color: #f2f2f2;
        }


    }




}
`;