import styled from 'styled-components';
import { palette, breakpoints } from '../theme';

const Wrapper = styled.nav`
    background-color: ${palette.primary.main};
    grid-column: sidebar-start / sidebar-end;
    grid-row: 1 / -1;

    @media only screen and (max-width: ${breakpoints.lg}) {
    grid-column: 1 / -1;
    grid-row: 1 / 2;
    justify-content: flex-end;
    align-items: center;
    }

    display: flex;
    justify-content: center;
`;

const NavButton = styled.button`
    border: none;
    border-radius: none;

    background-color: #fff;
    height: 3.5px;
    width: 4rem;
    margin-top: 3.5rem;

    &::before,
    &::after {
        content: '';
        display: block;
        background-color: #fff;
        height: 3.5px;
        width: 4rem;
    }

    &::before {
        transform: translateY(-1.3rem);
    }
    &::after {
        transform: translateY(1.1rem);
    }

    @media only screen and (max-width: ${breakpoints.lg}) {
    margin-top: 0;
    margin-right: 3rem;

    height: 3px;

    &::before {
        height: 3px;
        transform: translateY(-1.3rem);
    }
    &::after {
        height: 3px;
        transform: translateY(0.9rem);
    }
`;

export default function Sidebar() {
    return (
        <Wrapper>
            <NavButton />
        </Wrapper>
    );
}
