import React, { Component } from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Hello from './Hello';
import Header from './Header.js';
import './style.css';
import DashBoard from './DashBoard.js';
import ExpenseList from './ExpenseList.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <Router>
        <Switch>
          <MuiThemeProvider>
            <div dir="rtl">
              <Header title="حلويات الرمال" />
              {/* <DashBoard /> */}
              <Route path="/" exact component={ExpenseList} />
            </div>
          </MuiThemeProvider>
        </Switch>
      </Router>
    );
  }
}

render(<App />, document.getElementById('root'));
