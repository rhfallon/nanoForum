import React, { Component } from "react";
import {Button } from 'antd';
import "../../index.css";

class ThreadBtn extends Component {


  render() {

    return (

        <div className="thread">
        <Button href="./threadOne" className="threadOne" block >Thread One</Button>
        <Button className="threadTwo" block >Thread Two</Button>
        <Button className="threadThree" block >Thread Three</Button>
        </div>

    );
  }
}



export default ThreadBtn;