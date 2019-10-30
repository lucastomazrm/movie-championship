import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router-dom";

import store from "./store";
import history from "./routes/history";
import Countries from "./views/Movies";

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={Countries} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
