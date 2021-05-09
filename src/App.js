import Home from "./pages/Home";
import Details from "./pages/Details";
import Sidebar from "./components/Sidebar";

import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import GlobalStyle from "../src/styles/global";
import { AnimatePresence } from "framer-motion";
import styled from "styled-components";

const Content = styled.main`
  position: fixed;
  left: 0;
  right: 0;
  z-index: 9999;
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  align-items: center;
  height: 100%;
`;

const Hero = styled.div`
  background: #3a6186; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #89253e,
    #3a6186
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #89253e,
    #3a6186
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  padding-top: 0rem;
  padding-bottom: 0rem;
  position: relative;
  width: 100%;
  height: 100%;
  margin-right: auto;
  margin-left: auto;
  max-width: 60rem;
  padding: 100px;

  @media (max-width: 1024px) {
    padding: 54px;
  }
`;

const BackgroundImage = styled.div``;

function App() {
  const location = useLocation();
  return (
    <>
      <GlobalStyle />
      <BackgroundImage>
        <AnimatePresence exitBeforeEnter>
          <Content>
            <Sidebar />
            <Hero>
              <Switch location={location} key={location.pathname}>
                <Route path="/" exact component={Home} />
                <Route path="/details" exact component={Details} />
                <Route render={() => <Redirect to="/" />} />
              </Switch>
            </Hero>
          </Content>
        </AnimatePresence>
      </BackgroundImage>
    </>
  );
}

export default App;
