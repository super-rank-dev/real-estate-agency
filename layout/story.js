import styled from 'styled-components';

import { palette, breakpoints } from '../theme';
import { H3, H2 } from '../components/typography';
import Button from '../components/button';

// Left part of the story section
const Pictures = styled.div`
    background-color: ${palette.primary.main};
    grid-column: full-start / col-end 4;
    background-image: linear-gradient(
    ${palette.primary.main + '80'}, ${palette.primary.main + '80'}
    ),
    url(../images/back.jpg);
    background-size: cover;

    display: grid;
    grid-template-rows: repeat(6, 1fr);
    grid-template-columns: repeat(6, 1fr);
    align-items: center;

    @media only screen and (max-width: ${breakpoints.md}) {
    grid-column: 1 / -1;
    padding: 6rem;
    }
`;

const CoupleImg = styled.img`
    width: 100%;
    grid-row: 2 / span 4;
    grid-column: 2 / span 4;
    box-shadow: 0 2rem 5rem rgba(0, 0, 0, 0.1);

    @media only screen and (max-width: ${breakpoints.md}) {
    grid-column: 1 / 5;
    grid-row: 1 / -1;
    }
`;
// Increased width to achieve overlapping effect
const HouseImg = styled.img`
    width: 115%;
    grid-row: 4 / span 2;
    grid-column: 4 / span 3;
    box-shadow: 0 2rem 5rem rgba(0, 0, 0, 0.2);
    z-index: 10;

    @media only screen and (max-width: ${breakpoints.md}) {
    grid-row: 1 / -1;
    width: 100%;
    }
`;

// Right part of the story section
const Content = styled.div`
    background-color: ${palette.grey.light1};
    grid-column: col-start 5 / full-end;

    padding: 6rem 8vw;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    @media only screen and (max-width: ${breakpoints.md}) {
    grid-column: 1 / -1;
    grid-row: 5 / 6;
    }
`;

const StoryText = styled.p`
    font-size: 1.5rem;
    font-style: italic;
    margin-bottom: 4rem;
`;

export default function Story() {
    return (
        <>
            <Pictures>
                <CoupleImg src="images/story-1.jpeg" alt="Couple with new house" />
                <HouseImg src="images/story-2.jpeg" alt="New house" />
            </Pictures>
            <Content>
                <H3 mb={0}>Happy Customers</H3>
                <H2 mb={1} color="dark">
                    &ldquo;The best decision of our lives&rdquo;
                </H2>
                <StoryText>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                    distinctio necessitatibus pariatur voluptatibus. Quidem consequatur
                    harum volupta!
                </StoryText>
                <Button>Find your own home</Button>
            </Content>
        </>
    );
}