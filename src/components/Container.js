import styled from 'styled-components';

const Content = styled.div`
  @media (min-width: ${(props) => props.theme.breakpoint}) {
    max-width: 60vw;
  }
  padding: 2em;
`;

const Main = styled.div`
  flex: 1 0 auto;
  overflow-y: auto;
`;

const Container = (props) => {
  return (
    <Main>
      <Content>{props.children}</Content>
    </Main>
  );
};

export default Container;
