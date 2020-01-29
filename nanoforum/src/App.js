import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import index from './components/pages/index'
import threadOne from './components/pages/threadOne'
import threadTwo from './components/pages/threadTwo'
import threadThree from './components/pages/threadThree'


class App extends Component{
  render(){
    return(
      <Router>
      <div>
        <Route exact path="/" component= {index}/>
        <Route exact path="/threadone" component= {threadOne}/>
        <Route exact path="/threadtwo" component= {threadTwo}/>
        <Route exact path="/threadthree" component= {threadThree}/>

      </div>
    </Router>
    )
  }
}
export default App;
