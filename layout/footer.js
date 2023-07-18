import styled from 'styled-components';
import { palette, typography } from '../theme';

const Wrapper = styled.footer`
    background-color: ${palette.secondary.main};
    grid-column: full-start / full-end;
    padding: 8rem;
`;

const Nav = styled.ul`
    list-style: none;

    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    align-items: center;
`

const NavItem = styled.li``
const NavLink = styled.a`
    &:link,
    &:visited {
    font-size: 1.4rem;
    color: #fff;
    text-decoration: none;
    font-family: ${typography.displayFontFamily};
    text-transform: uppercase;
    text-align: center;
    padding: 1.5rem;
    display: block;
    transition: all .2s;
    }

    &:hover {
    background-color: rgba(255,255,255, .05);
    transform: translateY(-3px);
    }
`
const Copyright = styled.p`
    font-size: 1.4rem;
    color: ${palette.grey.light2};
    text-align: center;
    margin-top: 6rem;
`

export default function Footer() {
    return <Wrapper>
        <Nav>
            {links.map(link => (
                <NavItem key={link.text}>
                    <NavLink href={link.url}>{link.text}</NavLink>
                </NavItem>
            ))}
        </Nav>
        <Copyright>
            &copy; Coded in 2023 by Anthony Bartolotte.
        </Copyright>
    </Wrapper>
}

const links = [
    {
        text: "Find your dream home",
        url: "#"
    },
    {
        text: "Request proposal",
        url: "#"
    },
    {
        text: "Download home planner",
        url: "#"
    },
    {
        text: "Contact us",
        url: "#"
    },
    {
        text: "Submit your property",
        url: "#"
    },
    {
        text: "Come work with us",
        url: "#"
    },
]