import Home from "./pages/Home";
import Details from "./pages/Details";
import Catalog from "./pages/Catalog";
import Header from "./components/Header";
import Background from "./assets/pexels-pavel-danilyuk-7234213.jpg";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation,
} from "react-router-dom";
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

  border: 3px dashed yellow;
  display: flex;
  align-items: center;
  height: 100%;
`;

const Hero = styled.div`
  border: 2px solid purple;
  padding-top: 0rem;
  padding-bottom: 0rem;

  position: relative;
  width: 100%;

  margin-right: auto;
  margin-left: auto;

  max-width: 60rem;

  padding: 8rem;
`;

const BackgroundImage = styled.div``;

function App() {
  const location = useLocation();
  return (
    <>
      <GlobalStyle />

      <AnimatePresence exitBeforeEnter>
        <Header />
        <BackgroundImage />
        <Content>
          <Hero>
            <Switch location={location} key={location.pathname}>
              <Route path="/" exact component={Home} />
              <Route path="/catalog" exact component={Catalog} />
              <Route path="/details" exact component={Details} />
              <Route render={() => <Redirect to="/" />} />
            </Switch>
          </Hero>
        </Content>
      </AnimatePresence>
    </>
  );
}

export default App;
