import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router-dom";

import store from "./store";
import history from "./routes/history";
import MoviesSelection from "./views/MoviesSelection";
import Progress from "./components/Progress";
import Intro from "./components/Header";
import Loading from "./components/Loading";
import Groups from "./views/Groups";

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Intro />
        <Switch>
          <Route exact path="/" component={MoviesSelection} />
          <Route exact path="/groups" component={Groups} />
        </Switch>
        <Loading />
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
