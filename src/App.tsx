import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router-dom";

import store from "./store";
import history from "./routes/history";
import Countries from "./views/Movies";
import Progress from "./components/Progress";
import Intro from "./components/Header";

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Intro />
        <Switch>
          <Route exact path="/" component={Countries} />
        </Switch>
        <Progress />
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
