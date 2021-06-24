import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import BaseLayout from './components/layouts/BaseLayout';
import AboutUs from './components/AboutUs';
import Plots from './components/Plots'
import FAQ from './components/FAQ';
import Forms from './components/Forms'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <BaseLayout>
        <Switch>
          <Route exact path='/' component={App}/>
          <Route path='/about' component={AboutUs}/>
          <Route path='/faq/:faqID' component={FAQ}/>
          <Route path='/forms' component={Forms}/>
          <Route path='/plots' component={Plots}/>
        </Switch>
      </BaseLayout>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
