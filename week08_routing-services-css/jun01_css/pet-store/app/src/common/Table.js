import styled, { css } from 'styled-components';
import colors from './colors';

export const Table = styled.table`
  width: 90%;
  color: ${colors.secondary};

  &:hover {
    color: ${colors.primary};
    cursor: pointer;
  }

  ${props => css`
    background: ${props.background || 'lightsteelblue'};
  `}
`;

export const Input = styled.input`
    padding: 0.5em;
    margin: 0.5em;
    color: palevioletred;
    background: papayawhip;
    border: none;
    border-radius: 3px;
`;