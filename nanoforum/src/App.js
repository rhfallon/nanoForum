import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import index from './components/pages/index'

class App extends Component{
  render(){
    return(
      <Router>
      <div>
        <Route exact path="/" component= {index}/>
      </div>
    </Router>
    )
  }
}
export default App;
