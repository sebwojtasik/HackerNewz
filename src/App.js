import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header';
import ShowStories from './components/ShowStories';
import PageNotFound from './components/PageNotFound';
import User from './components/User';
import ThemeToggle from './components/ThemeToggle';
import GlobalStyle from './components/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import CommentList from './components/CommentList';
import styled from 'styled-components';
import { lightTheme, darkTheme } from './styles/themes';
import useDarkMode from './hooks/useDarkMode';

const Layout = styled.div`
  display: flex;
  @media (max-width: ${(props) => props.theme.breakpoint}) {
    flex-direction: column;
  }
  height: 100vh;
  flex-wrap: contain;
`;

const App = () => {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />

      <Layout>
        <Header>
          <ThemeToggle callback={toggleTheme} theme={theme} />
        </Header>

        <Switch>
          <Route path="/item/:id" component={CommentList} />
          <Route path="/user/:id" component={User} />
          <Route path="/" render={() => <Redirect to="/top" />} exact={true} />
          <Route
            path="/:type"
            render={({ match }) => {
              const { type } = match.params;
              if (!['top', 'new', 'show', 'ask', 'job'].includes(type)) {
                return <PageNotFound />;
              }
              return <ShowStories type={type} />;
            }}
          />
          <Route component={PageNotFound} />
        </Switch>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
