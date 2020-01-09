import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import List from './pages/List';
import Detail from './pages/Detail';
import NotFound from './pages/NotFound';

const detailPageWebPath = (id) => `/pet/${id}`;

const App = ({}) => (
  <HashRouter>
    <Switch>
      <Route path="/" exact component={List} />
      <Route path={detailPageWebPath(':id')} exact component={Detail} />
      <Route path="*" component={NotFound} />
    </Switch>
  </HashRouter>
);

export default App;
