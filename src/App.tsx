import React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router-dom";

import store from "./store";
import history from "./routes/history";
import MoviesSelection from "./views/MoviesSelection";
import Header from "./components/Header";
import Loading from "./components/Loading";
import Groups from "./views/Quarterfinals";
import Semifinals from "./views/Semifinals";
import Finals from "./views/Final";
import Winner from "./views/Winner";

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Header />
        <Switch>
          <Route exact path="/" component={MoviesSelection} />
          <Route exact path="/groups" component={Groups} />
          <Route exact path="/semifinals" component={Semifinals} />
          <Route exact path="/final" component={Finals} />
          <Route exact path="/winner" component={Winner} />
        </Switch>
        <Loading />
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
