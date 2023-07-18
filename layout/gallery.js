import styled from 'styled-components';
import { palette } from '../theme';

const Wrapper = styled.section`

    grid-column: full-start / full-end;

    display: grid;
    gap: 1.5rem;
    padding: 1.5rem;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(7, 5vw);
`;

const Figure = styled.figure`
    &.gallery-item {
    &--1 {
    grid-row: 1 / span 2;
    grid-column: 1 / span 2;
    }
    &--2 {
    grid-row: 1 / span 3;
    grid-column: 3 / span 3;
    }
    &--3 {
    grid-row: 1 / span 2;
    grid-column: 6 / span 1;
    }
    &--4 {
    grid-row: 1 / span 2;
    grid-column: 7 / span 2;
    }
    &--5 {
    grid-row: 3 / span 3;
    grid-column: 1 / span 2;
    }
    &--6 {
    grid-row: 4 / span 2;
    grid-column: 3 / span 2;
    }
    &--7 {
    grid-row: 4 / span 1;
    grid-column: 5 / span 1;
    }
    &--8 {
    grid-row: 3 / span 2;
    grid-column: 6 / span 2;
    }
    &--9 {
    grid-row: 3 / span 3;
    grid-column: 8 / span 1;
    }
    &--10 {
    grid-row: 6 / span 2;
    grid-column: 1 / span 1;
    }
    &--11 {
    grid-row: 6 / span 2;
    grid-column: 2 / span 2;
    }
    &--12 {
    grid-row: 6 / span 2;
    grid-column: 4 / span 1;
    }
    &--13 {
    grid-row: 5 / span 3;
    grid-column: 5 / span 3;
    }
    &--14 {
    grid-row: 6 / span 2;
    grid-column: 8 / span 1;
    }
    }
`;
const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
`;

export default function Gallery() {
    let items = [];

    for (let i = 1; i <= 14; i++) {
        items.push(
            <Figure key={i} className={`gallery-item--${i}`}>
                <Img src={`images/gal-${i}.jpeg`} alt={`Gallery image ${i}`} />
            </Figure>
        );
    }

    return <Wrapper>{items}</Wrapper>;
}
