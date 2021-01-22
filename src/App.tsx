import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import 'fontsource-roboto';


import SuppliersList from 'components/SuppliersList';
import SupplierPage from 'components/SupplierPage';
import NavBar from 'components/NavBar';



import { ISuppliersData } from 'interfaces';



const App = () => {

  const [suppliersData, setSuppliersData] = useState<ISuppliersData>({});
  const [activeSupplierId, setActiveSupplierId] = useState('');

  const getSuppliers = () => {
    return fetch('http://localhost:3001/suppliers')
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.error(err))
  }

  useEffect(() => {
    getSuppliers().then(data => {
      setSuppliersData(data)
    })
  }, []);

  return (

    <Router basename="/">
      <div>
        <Switch>
          <Route
            exact
            path="/supplier/:id"
            component={
              (props: any) =>
                <NavBar
                  {...props}
                  suppliersData={suppliersData}
                  activeSupplierId={activeSupplierId}
                />
            }
          >
          </Route>
        </Switch>

        <Switch>
          <Route
            exact
            path="/"
            component={
              (props:any) => 
                <SuppliersList 
                  {...props}
                  suppliersData={suppliersData} 
                  setActiveSupplier={setActiveSupplierId}
                  activeSupplier={activeSupplierId}
                />
              }
            />
          <Route
            exact
            path="/supplier/:id"
            component={
              (props: any) =>
                <SupplierPage
                  {...props}
                  suppliersData={suppliersData}
                  setActiveSupplier={setActiveSupplierId}
                />
              }
            />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
