import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/Home";

import { Provider } from 'react-redux'
import store from './store'

class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Router>
            <div className="App">
              <Route exact path="/" component={Home} />
            </div>
          </Router>
        </Provider>
      </div>
    );
  }
  componentDidMount(){
    document.title = "react-template"
  }
}

export default App;
