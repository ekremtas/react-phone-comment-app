import React from "react";
import "./App.css";
import { NavigationBar } from "./components";
import { Container } from "reactstrap";
import { Switch, Route } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <div className="App">
      <Container>
        <NavigationBar />

        <Switch>
          {routes.map((route) => {
            return (
              <Route
                key={Math.random()}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            );
          })}
        </Switch>
      </Container>
    </div>
  );
}

export default App;
