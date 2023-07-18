import styled from 'styled-components';
import { palette, breakpoints } from '../theme';
import { H3, H4 } from '../components/typography';

const Wrapper = styled.div`
    background-color: ${palette.secondary.main};
    grid-column: col-start 7 / full-end;
    padding: 3rem;

    display: grid;
    row-gap: 2rem;
    align-content: center;
    justify-content: center;
    justify-items: center;

    @media only screen and (max-width: ${breakpoints.md}) {
    grid-column: 1 / -1;
    }
`;

const List = styled.div`
    display: grid;
    grid-template-columns: min-content max-content;
    column-gap: 2rem;
    row-gap: 5vh;
    align-items: center;

    @media only screen and (max-width: ${breakpoints.md}) {
    grid-template-columns: repeat(3, min-content max-content);
    }

    @media only screen and (max-width: ${breakpoints.md}) {
    grid-template-columns: min-content max-content;
    }
`;

const Img = styled.img`
    width: 7rem;
    border-radius: 50%;
    display: block;
`;

const Details = styled.div``;
const HousesSold = styled.p`
    text-transform: uppercase;
    color: ${palette.grey.light2};
    margin-top: -3px;
`;

export default function Realtors() {
    return (
        <Wrapper>
            <H3>Top 3 Realtors</H3>
            <List>
                {realtors.map((realtor, i) => (
                    <React.Fragment key={realtor.name}>
                        <Img
                            src={`images/realtor-${i + 1}.jpeg`}
                            alt={`${realtor.name} photo`}
                        />
                        <Details>
                            <H4 color="light">{realtor.name}</H4>
                            <HousesSold>{realtor.housesSold} houses sold</HousesSold>
                        </Details>
                    </React.Fragment>
                ))}
            </List>
        </Wrapper>
    );
}

const realtors = [
    { name: 'Erik Feiman', housesSold: 245 },
    { name: 'Monica Bellucci', housesSold: 211 },
    { name: 'Anthony Hopkins', housesSold: 194 },
];
