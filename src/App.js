import Home from "./pages/Home";
import Details from "./pages/Details";
import Header from "./components/Header";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import GlobalStyle from "../src/styles/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />

      <BrowserRouter>
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/details" exact component={Details} />
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
