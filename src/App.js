import Home from "./pages/Home";
import Details from "./pages/Details";
import Sidebar from "./components/Sidebar";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import GlobalStyle from "../src/styles/global";
import { AnimatePresence } from "framer-motion";
import styled from "styled-components";

function App() {
  const location = useLocation();
  return (
    <>
      <GlobalStyle />
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
    </>
  );
}

const Content = styled.main`
  position: fixed;
  left: 0;
  right: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  height: 100%;
`;

const Hero = styled.section`
  background: #3a6186;
  background: -webkit-linear-gradient(to right, #89253e, #3a6186);
  background: linear-gradient(to right, #89253e, #3a6186);
  box-shadow: rgba(0, 0, 0, 0.5) 0px 22px 70px 4px;
  padding-top: 0rem;
  padding-bottom: 0rem;
  position: relative;
  width: 100%;
  height: 100%;
  margin-right: 200px;
  margin-left: 200px;
  padding: 100px;

  @media (max-width: 1024px) {
    padding: 54px 20px;

    margin-right: auto;
    margin-left: auto;
  }
`;

export default App;
