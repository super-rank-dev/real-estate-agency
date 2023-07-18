import styled from 'styled-components';
import { H4 } from '../components/typography';
import { palette } from '../theme';
import SpriteIcon from '../components/icon';

// DESCRIPTION
const Description = styled.p`
    font-size: 1.7rem;
`;

// ICON
const FeatureIcon = styled(SpriteIcon)`
    fill: ${palette.primary.main};
    width: 4.5rem;
    height: 4.5rem;
    grid-row: 1 / span 2;
    transform: translateY(-1rem);
`;

// FEATURE 
const FeatureWrapper = styled.div`
    display: grid;
    grid-template-columns: min-content 1fr;
    row-gap: 1.5rem;
    column-gap: 2.5rem;
`;

function Feature({ title, description, iconName }) {
    return (
        <FeatureWrapper>
            <FeatureIcon name={iconName} />
            <H4 color="dark">{title}</H4>
            <Description>{description}</Description>
        </FeatureWrapper>
    );
}

// FEATURES
const Wrapper = styled.section`
    grid-column: center-start / center-end;
    margin: 15rem 0;

    display: grid;
    gap: 6rem;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    align-items: start;
`;

export default function Features() {
    return (
        <Wrapper>
            {features.map(feature => (
                <Feature key={feature.title} {...feature} />
            ))}
        </Wrapper>
    );
}

const features = [
    {
        title: "World's best luxury homes",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.",
        iconName: "global"
    },
    {
        title: "Only the best properties",
        description: "Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut quia.",
        iconName: "trophy"
    },
    {
        title: "All homes in top locations",
        description: "Tenetur distinctio necessitatibus pariatur voluptatibus quidem consequatur harum.",
        iconName: "map-pin"
    },
    {
        title: "New home in one week",
        description: "Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        iconName: "key"
    },
    {
        title: "Top 1% realtors",
        description: "Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio necessitatibus pariatur voluptatibus.",
        iconName: "presentation"
    },
    {
        title: "Secure payments on nexter",
        description: "Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia quae.",
        iconName: "lock"
    },
]