import styled from 'styled-components';
import { space } from 'styled-system';
import { palette, typography } from '../theme';

const heading = () => `
    font-family: ${typography.displayFontFamily};
    font-weight: 400;
`;

export const H1 = styled.h1`
    ${heading}
    font-size: 4.5rem;
    color: ${palette.grey.light1};
    line-height: 1;
`;

export const H2 = styled.h2`
    ${heading}
    font-size: 4rem;
    font-style: italic;
    line-height: 1;
    color: ${({ color }) =>
    color === 'light'
        ? palette.grey.light1
        : palette.grey.dark1};

    ${space}
`;
export const H3 = styled.h3`
    ${heading}
    font-size: 1.6rem;
    color: ${palette.primary.main};
    text-transform: uppercase;

    ${space}
`;
export const H4 = styled.h4`
    ${heading}
    font-size: 1.9rem;
    color: ${({ color }) =>
    color === 'light'
    ? palette.grey.light1
    : palette.grey.dark1};
`;