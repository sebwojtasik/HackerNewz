import React from 'react';
import styled from 'styled-components';
import { BiSun, BiMoon } from 'react-icons/bi';

const Toggle = styled.button`
  border: 0;
  background: inherit;
  padding: 0.75em 0;
  font-size: ${(props) => props.theme.fontSizes.large};
  color: ${(props) => props.theme.colors.font};
`;

const ThemeToggle = ({ theme, callback }) => {
  return (
    <Toggle onClick={callback}>
      {theme === 'light' ? <BiMoon /> : <BiSun />}
    </Toggle>
  );
};

export default ThemeToggle;
