import styled from 'styled-components';
import { palette, typography } from '../theme';

const Button = styled.button`
    border: none;
    border-radius: none;
    color: #fff;
    background-color: ${palette.primary.main};
    font-family: ${typography.displayFontFamily};
    font-size: 1.5rem;
    text-transform: uppercase;
    padding: 1.8rem 3rem;
    cursor: pointer;
    transition: all .2s;

    &:hover {
    background-color: ${palette.primary.dark};
    }
`;

export default Button;