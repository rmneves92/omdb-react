import Home from "./pages/Home";
import Details from "./pages/Details";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/details" exact component={Details} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
