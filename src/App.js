import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { withRouter } from 'react-router';
import { Provider } from "react-redux"
import Component from './Saga_Test/component';
import store from './store';

const App = () => {
  return (
    <div>
       <Route path='/' render={() => <Component />} />
    </div>
  )
}



let AppC = withRouter(App)

const AppContainer = () => {
  return (
    <AppC />
  )
}

let MainApp = () => {
  return <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>
}

export default MainApp