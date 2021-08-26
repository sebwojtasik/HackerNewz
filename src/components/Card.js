import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  /* align-items: center; */
  margin-bottom: 1.25em;
  padding: 2em;
  background-color: ${(props) => props.theme.colors.foreground};
  border-radius: 0.35em;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.05);
`;

export default Card;
