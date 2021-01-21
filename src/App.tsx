import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import 'fontsource-roboto';

import Button from '@material-ui/core/Button';

import SuppliersPage from 'components/SuppliersPage';
import SupplierPage from 'components/SupplierPage';

const App = () => (
  <Router basename="/">
      <div>
        <nav className="navbar">
          <ul className="navbar-menu">

            <li>
              <Link to="/">
              <Button variant="contained" color="primary">
                Suppliers
              </Button>
            </Link>
            </li>

          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={SuppliersPage} />
          <Route exact path="/supplier/:id" component={SupplierPage} />
        </Switch>
      </div>
    </Router>
);

export default App;
