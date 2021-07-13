import React from 'react';

import { HashRouter, Route, Switch, BrowserRouter , Router } from 'react-router-dom';
import Main from './containers/Main';


// import { Link } from 'react-router-dom';
function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path={['/', '/main']} component={Main} />
        {/* <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
        <Route path="/menu" component={Foodmenu} />
        <Route path="/menu_admin" component={Foodadmin} /> */}
      </Switch>
    </HashRouter>
  );
}

export default App;