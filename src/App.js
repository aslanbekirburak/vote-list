import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EnterUrl from "./pages/EnterUrl";
import List from "./pages/List";

import Head from "./components/header";

import Theme from "./styles/theme";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  justify-content: center;
  font-family: ${(props) => props.theme.fonts[0]};
`;

const App = () => {
  return (
    <Router>
      <Theme>
        <GlobalStyle />
        <Container>
          <Head />
          <Switch>
            <Route path="/enterNew">
              <EnterUrl />
            </Route>
            <Route path="/">
              <List />
            </Route>
          </Switch>
        </Container>
      </Theme>
    </Router>
  );
};
export default App;
