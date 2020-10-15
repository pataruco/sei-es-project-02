import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

//pages
import Home from '../pages/Home';
import Results from '../pages/Results';

// UI components
import Header from './Header.js';
import Footer from './Footer.js';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/results/:searchString" component={Results} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
