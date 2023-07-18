import styled from 'styled-components';
import { palette, typography } from '../theme';
import SpriteIcon from '../components/icon';
import Button from '../components/button';

// Section wrapper
const Wrapper = styled.section`
    grid-column: center-start / center-end;
    margin: 15rem 0;

    display: grid;
    gap: 7rem;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
`;

// Individual home wrapper
const HomeWrapper = styled.div`
    background-color: ${palette.grey.light1};

    display: grid;
    row-gap: 3.5rem;
    grid-template-columns: repeat(2, 1fr);
`;

// Image
const HomeImg = styled.img`
    width: 100%;
    grid-column: 1 / -1;
    grid-row: 1 / 2;
    z-index: 1;
`;

// Heart Icon
const HomeHeartIcon = styled(SpriteIcon)`
    grid-row: 1 / 2;
    grid-column: 2 / 3;
    fill: ${palette.primary.main};
    height: 2.5rem;
    width: 2.5rem;
    z-index: 10;
    justify-self: end;
    margin: 1rem;
`;

// Name
const HomeName = styled.h5`
    grid-column: 1 / -1;
    grid-row: 1 / 2;
    justify-self: center;
    align-self: end;
    z-index: 10;

    width: 80%;
    font-family: ${typography.displayFontFamily};
    font-size: 1.6rem;
    font-weight: 400;
    text-align: center;
    padding: 1.25rem;
    color: #fff;
    background-color: ${palette.secondary.main};
    transform: translateY(50%);
`;

// Home detail base
const HomeDetail = styled.div`
    font-size: 1.5rem;
    margin-left: 2rem;

    display: flex;
    align-items: center;
`;

const HomeLocation = styled(HomeDetail)`
    margin-top: 2.5rem;
`;
const HomeRooms = styled(HomeDetail)`
    margin-top: 2.5rem;
`;
const HomeArea = styled(HomeDetail)``;
const HomePrice = styled(HomeDetail)``;

// Detail icon
const HomeDetailIcon = styled(SpriteIcon)`
    fill: ${palette.primary.main};
    height: 2rem;
    width: 2rem;
    margin-right: 1rem;
`;

// Button
const HomeButton = styled(Button)`
    grid-column: 1 / -1;
`;

function Home({ name, imgSrc, location, rooms, area, price }) {
    return (
        <HomeWrapper>
            <HomeImg src={imgSrc} />
            <HomeHeartIcon name="heart-full" />
            <HomeName>{name}</HomeName>
            <HomeLocation>
                <HomeDetailIcon name="map-pin" />
                <p>{location}</p>
            </HomeLocation>
            <HomeRooms>
                <HomeDetailIcon name="profile-male" />
                <p>{rooms} rooms</p>
            </HomeRooms>
            <HomeArea>
                <HomeDetailIcon name="expand" />
                <p>
                    {area} m<sup>2</sup>
                </p>
            </HomeArea>
            <HomePrice>
                <HomeDetailIcon name="key" />
                <p>${price}</p>
            </HomePrice>
            <HomeButton>Contact realtor</HomeButton>
        </HomeWrapper>
    );
}

export default function Homes() {
    return (
        <Wrapper>
            {homes.map((home) => (
                <Home key={home.name} {...home} />
            ))}
        </Wrapper>
    );
}

const homes = [
    {
        name: 'Beautiful Family Home',
        location: 'USA',
        rooms: '5',
        area: '325',
        price: '1,200,000',
        imgSrc: 'images/house-1.jpeg',
    },
    {
        name: 'Modern Glass Villa',
        location: 'Canada',
        rooms: '6',
        area: '480',
        price: '1,950,000',
        imgSrc: 'images/house-2.jpeg',
    },
    {
        name: 'Cozy Country House',
        location: 'UK',
        rooms: '4',
        area: '250',
        price: '850,000',
        imgSrc: 'images/house-3.jpeg',
    },
    {
        name: 'Large Rustical Villa',
        location: 'Portugal',
        rooms: '6',
        area: '480',
        price: '1,950,000',
        imgSrc: 'images/house-4.jpeg',
    },
    {
        name: 'Majestic Palace House',
        location: 'Germany',
        rooms: '18',
        area: '4230',
        price: '9,500,000',
        imgSrc: 'images/house-5.jpeg',
    },
    {
        name: 'Modern Family Apartament',
        location: 'Italy',
        rooms: '3',
        area: '180',
        price: '600,000',
        imgSrc: 'images/house-6.jpeg',
    },
];